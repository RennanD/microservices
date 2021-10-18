import { ICreateRole } from '../dtos/ICreateRole';
import { Role } from '../entities/Role';

export interface IFindParams {
  slug: string;
  name?: string;
}

export interface IRoleRepository {
  findAll(): Promise<Role[]>;
  findById(id: string): Promise<Role | undefined>;
  findOne(params: IFindParams): Promise<Role | undefined>;
  create(role_data: ICreateRole): Promise<void>;
  save(role: Role): Promise<void>;
}
