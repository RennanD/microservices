import { Router } from 'express';
import { ModulesController } from '../controllers/ModulesController';

const modulesRoutes = Router();

const modulesController = new ModulesController();

modulesRoutes.get('/', modulesController.list);
modulesRoutes.post('/', modulesController.create);

export { modulesRoutes };
