import { Router } from 'express';
import { ModulesController } from '../controllers/ModulesController';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const modulesRoutes = Router();

const modulesController = new ModulesController();

modulesRoutes.get('/', modulesController.list);

modulesRoutes.post('/', ensureAuthenticated, modulesController.create);

export { modulesRoutes };
