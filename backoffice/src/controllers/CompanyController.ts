import { Request, Response } from 'express';
import { CompanyRepositoryTypeOrm } from '../repositories/typeorm/CompanyRepository';
import { CreateCompanyService } from '../services/CreateCompanyService';

export class CompanyController {
  async create(request: Request, response: Response): Promise<Response> {
    const companieRepository = new CompanyRepositoryTypeOrm();
    const { name } = request.body;

    const createCompanyService = new CreateCompanyService(companieRepository);

    await createCompanyService.run({
      name,
    });

    return response.status(201).send();
  }
}
