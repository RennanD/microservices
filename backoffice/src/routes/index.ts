import { Router } from 'express';

import { companiesRoutes } from './companies.routes';
import { modulesRoutes } from './modules.routes';
import { rolesRoutes } from './roles.routes';

const routes = Router();

routes.get('/', (request, response) => {
  response.json({
    message: 'Hello World',
  });
});

routes.use('/companies', companiesRoutes);
routes.use('/modules', modulesRoutes);
routes.use('/roles', rolesRoutes);

export { routes };
