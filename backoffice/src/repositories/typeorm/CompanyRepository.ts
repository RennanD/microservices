import { getRepository, Repository } from 'typeorm';
import { ICreateCompanyDTO } from '../../dtos/ICreateCompanyDTO';
import { Company } from '../../entities/Company';
import { ICompanyRepository, IFindParams } from '../IComponyRepository';

export class CompanyRepositoryTypeOrm implements ICompanyRepository {
  private typeOrmRepository: Repository<Company>;

  constructor() {
    this.typeOrmRepository = getRepository(Company);
  }

  async findAll(): Promise<Company[]> {
    return this.typeOrmRepository.find();
  }

  async findById(id: string): Promise<Company | undefined> {
    return this.typeOrmRepository.findOne(id);
  }

  findOne(params: IFindParams): Promise<Company | undefined> {
    return this.typeOrmRepository.findOne({
      where: params,
    });
  }

  async cretae(company_data: ICreateCompanyDTO): Promise<void> {
    const { name, token } = company_data;

    const company = this.typeOrmRepository.create({
      name,
      token,
    });

    await this.typeOrmRepository.save(company);
  }

  async save(company: Company): Promise<void> {
    await this.typeOrmRepository.save(company);
  }
}
