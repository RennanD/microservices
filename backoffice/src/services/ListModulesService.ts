import { Module } from '../entities/Module';
import { IModulesRepository } from '../repositories/IModulesRepository';

export class ListModulesService {
  constructor(private modulesRepository: IModulesRepository) {}

  async run(): Promise<Module[]> {
    return this.modulesRepository.findAll();
  }
}
