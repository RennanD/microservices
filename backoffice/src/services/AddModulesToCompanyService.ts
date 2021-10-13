import { Producer } from 'kafkajs';
import { BadRequestError } from '../errors/BadRequestError';
import { ICompanyRepository } from '../repositories/IComponyRepository';
import { IModulesRepository } from '../repositories/IModulesRepository';

interface IRequest {
  company_id: string;
  modules_ids: string[];
}

export class AddModulesToCompanyService {
  constructor(
    private companiesRespository: ICompanyRepository,
    private modulesRepository: IModulesRepository,
    private kafkaProducer: Producer,
  ) {}

  async run({ company_id, modules_ids }: IRequest): Promise<void> {
    const findCompany = await this.companiesRespository.findById(company_id);

    if (!findCompany) {
      throw new BadRequestError('A empresa não existe');
    }

    const existentModules = await this.modulesRepository.findByIds(modules_ids);

    findCompany.modules = existentModules;

    await this.companiesRespository.save(findCompany);

    const message = {
      company_token: findCompany.token,
      enabled_modules: existentModules.map(module => ({
        name: module.name,
        slug: module.slug,
      })),
    };

    await this.kafkaProducer.send({
      topic: 'company-app.enable-modules',
      messages: [
        {
          value: JSON.stringify(message),
        },
      ],
    });
  }
}
