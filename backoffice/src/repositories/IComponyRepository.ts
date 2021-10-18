import { Company } from '../entities/Company';

import { ICreateCompanyDTO } from '../dtos/ICreateCompanyDTO';

export interface IFindParams {
  name?: string;
  token?: string;
}

export interface ICompanyRepository {
  findAll(): Promise<Company[]>;
  findById(id: string): Promise<Company | undefined>;
  findOne(params: IFindParams): Promise<Company | undefined>;
  create(company_data: ICreateCompanyDTO): Promise<void>;
  save(company: Company): Promise<void>;
}
