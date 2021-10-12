import { Company } from '../entities/Company';
import { ICompanyRepository } from '../repositories/IComponyRepository';

export class ListCompaniesService {
  constructor(private companiesRepository: ICompanyRepository) {}

  async run(): Promise<Company[]> {
    return this.companiesRepository.findAll();
  }
}
