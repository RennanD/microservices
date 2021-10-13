import { Router } from 'express';
import { EnabledModulesRepositoryMongoose } from '../repositories/mongoose/EnabledModulesRepositoryMongoose';

const enabledModulesRoutes = Router();

enabledModulesRoutes.get('/:token', async (request, response) => {
  const { token } = request.params;

  const enabledModulesRepositoryMongoose =
    new EnabledModulesRepositoryMongoose();

  const comapnyModules = await enabledModulesRepositoryMongoose.findAll(token);

  if (!comapnyModules) {
    return response.status(404).json({
      error: 'Você não permissão para acessar!',
    });
  }

  return response.json({
    modules: comapnyModules.modules,
  });
});

export { enabledModulesRoutes };
