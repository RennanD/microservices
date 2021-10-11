import { ICreateModuleDTO } from '../dtos/ICreateModuleDTO';
import { Module } from '../entities/Module';

export interface IFindParams {
  slug: string;
  name?: string;
}

export interface IModulesRepository {
  findAll(): Promise<Module[]>;
  findById(id: string): Promise<Module | undefined>;
  findOne(params: IFindParams): Promise<Module | undefined>;
  cretae(module_data: ICreateModuleDTO): Promise<void>;
  save(module: Module): Promise<void>;
}