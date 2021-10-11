import { Router } from 'express';

import { companiesRoutes } from './companies.routes';

const routes = Router();

routes.get('/', (request, response) => {
  response.json({
    message: 'Hello World',
  });
});

routes.use('/companies', companiesRoutes);

export { routes };
