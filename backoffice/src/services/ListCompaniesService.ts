import { Company } from '../entities/Company';
import { ICompanyRepository } from '../repositories/IComponyRepository';

export class ListCompaniesService {
  constructor(private companiesRepository: ICompanyRepository) {}

  async run(): Promise<Company[]> {
    const findComapanies = await this.companiesRepository.findAll();

    const parsedCompanies = findComapanies.map(company => ({
      ...company,
      modules: undefined,
    }));

    return parsedCompanies;
  }
}
