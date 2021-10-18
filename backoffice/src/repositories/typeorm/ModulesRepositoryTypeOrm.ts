import { getRepository, Repository } from 'typeorm';
import { ICreateModuleDTO } from '../../dtos/ICreateModuleDTO';
import { Module } from '../../entities/Module';
import { IFindParams, IModulesRepository } from '../IModulesRepository';

export class ModulesRepositoryTypeOrm implements IModulesRepository {
  private typeOrmRepository: Repository<Module>;

  constructor() {
    this.typeOrmRepository = getRepository(Module);
  }

  async findAll(): Promise<Module[]> {
    return this.typeOrmRepository.find();
  }

  async findByIds(ids: string[]): Promise<Module[] | []> {
    return this.typeOrmRepository.findByIds(ids);
  }

  async findById(id: string): Promise<Module | undefined> {
    return this.typeOrmRepository.findOne(id);
  }

  async findOne(params: IFindParams): Promise<Module | undefined> {
    return this.typeOrmRepository.findOne({
      where: params,
    });
  }

  async create(module_data: ICreateModuleDTO): Promise<void> {
    const { name, slug } = module_data;

    const module = this.typeOrmRepository.create({
      name,
      slug,
    });

    await this.typeOrmRepository.save(module);
  }

  async save(module: Module): Promise<void> {
    await this.typeOrmRepository.save(module);
  }
}
