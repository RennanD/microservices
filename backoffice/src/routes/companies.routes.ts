import { Router } from 'express';
import { CompanyController } from '../controllers/CompanyController';

const companiesRoutes = Router();

const companyController = new CompanyController();

companiesRoutes.post('/', companyController.create);

export { companiesRoutes };
