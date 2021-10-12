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
  ) {}

  async run({ company_id, modules_ids }: IRequest): Promise<void> {
    const findCompany = await this.companiesRespository.findById(company_id);

    if (!findCompany) {
      throw new BadRequestError('A empresa não existe');
    }

    const existentModules = await this.modulesRepository.findByIds(modules_ids);

    findCompany.modules = existentModules;

    await this.companiesRespository.save(findCompany);
  }
}
