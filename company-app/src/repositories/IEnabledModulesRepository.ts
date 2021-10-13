import { Document } from 'mongoose';

import { IEnabledModulesSchema } from '../entities/EnabledModules';

import { IEnabledModulesDTO } from '../dtos/IEnabledModulesDTO';

export interface IEnabledModulesRepository {
  findAll(company_token: string): Promise<IEnabledModulesSchema | null>;
  create(enabled_modules_data: IEnabledModulesDTO): Promise<void>;
  save(enabled_modules: Document): Promise<void>;
}
