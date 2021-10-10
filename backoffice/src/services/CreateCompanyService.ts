import crypto from 'crypto';

import { ICompanyRepository } from '../repositories/IComponyRepository';

interface IRequest {
  name: string;
}

export class CreateCompanyService {
  constructor(private companiesRepository: ICompanyRepository) {}

  public async run({ name }: IRequest): Promise<void> {
    const existentCompany = await this.companiesRepository.findOne({ name });

    if (existentCompany) {
      throw new Error('A empresa já está cadastrada no sistema');
    }

    const token = crypto.randomBytes(12).toString('hex');

    await this.companiesRepository.cretae({
      name,
      token,
    });
  }
}
