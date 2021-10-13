import { Router } from 'express';
import { ComanyModuleController } from '../controllers/ComanyModuleController';
import { CompanyController } from '../controllers/CompanyController';

const companiesRoutes = Router();

const companyController = new CompanyController();
const companyModuleController = new ComanyModuleController();

companiesRoutes.get('/', companyController.list);
companiesRoutes.get('/:company_id', companyController.show);

companiesRoutes.get('/token/:token', companyController.showToken);

companiesRoutes.post('/', companyController.create);
companiesRoutes.post('/:company_id', companyModuleController.create);

export { companiesRoutes };
