import { Router } from 'express';

import { companiesRoutes } from './companies.routes';
import { modulesRoutes } from './modules.routes';

const routes = Router();

routes.get('/', (request, response) => {
  response.json({
    message: 'Hello World',
  });
});

routes.use('/companies', companiesRoutes);
routes.use('/modules', modulesRoutes);

export { routes };
