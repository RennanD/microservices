import { Request, Response } from 'express';
import { CompanyRepositoryTypeOrm } from '../repositories/typeorm/CompanyRepository';
import { CreateCompanyService } from '../services/CreateCompanyService';
import { ListCompaniesService } from '../services/ListCompaniesService';
import { ShowCompaniesService } from '../services/ShowCompaniesService';

export class CompanyController {
  async list(request: Request, response: Response): Promise<Response> {
    const companiesRepository = new CompanyRepositoryTypeOrm();

    const listCompaniesService = new ListCompaniesService(companiesRepository);

    const companies = await listCompaniesService.run();

    return response.json({
      companies,
    });
  }

  async show(request: Request, response: Response): Promise<Response> {
    const { company_id } = request.params;

    const companiesRepository = new CompanyRepositoryTypeOrm();

    const showCompaniesService = new ShowCompaniesService(companiesRepository);

    const company = await showCompaniesService.run(company_id);

    return response.json({
      company,
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
