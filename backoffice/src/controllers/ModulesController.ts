import { Request, Response } from 'express';
import { ModulesRepositoryTypeOrm } from '../repositories/typeorm/ModulesRepositoryTypeOrm';
import { CreateModulesService } from '../services/CreateModulesService';
import { ListModulesService } from '../services/ListModulesService';

export class ModulesController {
  async list(request: Request, response: Response): Promise<Response> {
    const modulesRepository = new ModulesRepositoryTypeOrm();

    const listModulesService = new ListModulesService(modulesRepository);

    const modules = await listModulesService.run();

    return response.json({
      modules,
    });
  }

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
