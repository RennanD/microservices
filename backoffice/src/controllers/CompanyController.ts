import { Request, Response } from 'express';
import { CompanyRepositoryTypeOrm } from '../repositories/typeorm/CompanyRepository';
import { CreateCompanyService } from '../services/CreateCompanyService';
import { ListCompaniesService } from '../services/ListCompaniesService';

export class CompanyController {
  async list(request: Request, response: Response): Promise<Response> {
    const companiesRepository = new CompanyRepositoryTypeOrm();

    const listCompaniesService = new ListCompaniesService(companiesRepository);

    const companies = await listCompaniesService.run();

    return response.json({
      companies,
    });
  }

  async create(request: Request, response: Response): Promise<Response> {
    const companiesRepository = new CompanyRepositoryTypeOrm();
    const { name } = request.body;

    const createCompanyService = new CreateCompanyService(companiesRepository);

    await createCompanyService.run({
      name,
    });

    return response.status(201).send();
  }
}
