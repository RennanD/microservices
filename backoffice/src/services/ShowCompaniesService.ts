import { Company } from '../entities/Company';
import { BadRequestError } from '../errors/BadRequestError';
import { ICompanyRepository } from '../repositories/IComponyRepository';

export class ShowCompaniesService {
  constructor(private companiesRepository: ICompanyRepository) {}

  async run(id: string): Promise<Company> {
    const findCompany = await this.companiesRepository.findById(id);

    if (!findCompany) {
      throw new BadRequestError('A empresa não existe');
    }

    return {
      ...findCompany,
      modules: findCompany.modules,
    };
  }
}
