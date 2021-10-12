import { Router } from 'express';
import { ComanyModuleController } from '../controllers/ComanyModuleController';
import { CompanyController } from '../controllers/CompanyController';

const companiesRoutes = Router();

const companyController = new CompanyController();
const companyModuleController = new ComanyModuleController();

companiesRoutes.post('/', companyController.create);
companiesRoutes.post('/:company_id', companyModuleController.create);

export { companiesRoutes };
