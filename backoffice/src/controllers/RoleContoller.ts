import { Request, Response } from 'express';
import { RoleRepositoryTypeOrm } from '../repositories/typeorm/RoleRepositoryTypeOrm';
import { CreateRoleService } from '../services/CreateRoleService';

export class RoleContoller {
  async create(request: Request, response: Response): Promise<Response> {
    const roleRepositoryTypeOrm = new RoleRepositoryTypeOrm();
    const createRoleService = new CreateRoleService(roleRepositoryTypeOrm);
    const { name } = request.body;

    await createRoleService.run({
      name,
    });

    return response.status(201).send();
  }
}
