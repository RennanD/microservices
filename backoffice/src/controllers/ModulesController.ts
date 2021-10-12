import { Request, Response } from 'express';
import { ModulesRepositoryTypeOrm } from '../repositories/typeorm/ModulesRepositoryTypeOrm';
import { CreateModulesService } from '../services/CreateModulesService';

export class ModulesController {
  async create(request: Request, response: Response): Promise<Response> {
    const { name, slug } = request.body;

    const modulesRepository = new ModulesRepositoryTypeOrm();

    const createModulesService = new CreateModulesService(modulesRepository);

    await createModulesService.run({
      name,
      slug,
    });

    return response.status(201).send();
  }
}
