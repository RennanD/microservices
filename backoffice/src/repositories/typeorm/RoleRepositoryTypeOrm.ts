import { getRepository, Repository } from 'typeorm';
import { ICreateRole } from '../../dtos/ICreateRole';
import { Role } from '../../entities/Role';
import { IFindParams, IRoleRepository } from '../IRoleRepository';

export class RoleRepositoryTypeOrm implements IRoleRepository {
  private typeOrmRepository: Repository<Role>;

  constructor() {
    this.typeOrmRepository = getRepository(Role);
  }

  async findAll(): Promise<Role[]> {
    return this.typeOrmRepository.find();
  }

  async findById(id: string): Promise<Role | undefined> {
    return this.typeOrmRepository.findOne(id);
  }

  findOne(params: IFindParams): Promise<Role | undefined> {
    return this.typeOrmRepository.findOne({
      where: params,
    });
  }

  async create(role_data: ICreateRole): Promise<void> {
    const role = this.typeOrmRepository.create(role_data);

    await this.typeOrmRepository.save(role);
  }

  async save(role: Role): Promise<void> {
    await this.typeOrmRepository.save(role);
  }
}
