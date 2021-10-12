import { Request, Response } from 'express';
import { CompanyRepositoryTypeOrm } from '../repositories/typeorm/CompanyRepository';
import { ModulesRepositoryTypeOrm } from '../repositories/typeorm/ModulesRepositoryTypeOrm';
import { AddModulesToCompanyService } from '../services/AddModulesToCompanyService';

export class ComanyModuleController {
  async create(request: Request, response: Response): Promise<Response> {
    const { modules_ids } = request.body;
    const { company_id } = request.params;

    const companiesRepository = new CompanyRepositoryTypeOrm();
    const modulesRepository = new ModulesRepositoryTypeOrm();

    const addModulesToCompanyService = new AddModulesToCompanyService(
      companiesRepository,
      modulesRepository,
    );

    await addModulesToCompanyService.run({
      company_id,
      modules_ids,
    });

    return response.status(201).send();
  }
}
