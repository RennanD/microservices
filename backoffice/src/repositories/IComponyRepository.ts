import { Company } from '../entities/Company';

import { ICreateCompanyDTO } from '../dtos/ICreateCompanyDTO';

export interface IFindParams {
  token: string;
  name?: string;
}

export interface ICompanyRepository {
  findAll(): Promise<Company[]>;
  findById(id: string): Promise<Company | undefined>;
  findOne(params: IFindParams): Promise<Company | undefined>;
  cretae(company_data: ICreateCompanyDTO): Promise<void>;
  save(company: Company): Promise<void>;
}
