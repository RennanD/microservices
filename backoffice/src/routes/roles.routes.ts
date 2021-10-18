import { Router } from 'express';
import { RoleContoller } from '../controllers/RoleContoller';

const rolesRoutes = Router();

const roleContoller = new RoleContoller();

rolesRoutes.post('/', roleContoller.create);

export { rolesRoutes };
