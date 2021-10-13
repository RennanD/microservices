import { Document } from 'mongoose';
import { IEnabledModulesDTO } from '../../dtos/IEnabledModulesDTO';
import EnabledModules, {
  IEnabledModulesSchema,
} from '../../entities/EnabledModules';
import { IEnabledModulesRepository } from '../IEnabledModulesRepository';

export class EnabledModulesRepositoryMongoose
  implements IEnabledModulesRepository
{
  async findAll(company_token: string): Promise<IEnabledModulesSchema | null> {
    const enabledModules = await EnabledModules.findOne({
      company_token,
    });

    return enabledModules;
  }

  async create(enabled_modules_data: IEnabledModulesDTO): Promise<void> {
    const { company_token, modules } = enabled_modules_data;

    await EnabledModules.create({
      company_token,
      modules,
    });
  }

  async save(enabled_modules: Document): Promise<void> {
    await enabled_modules.save();
  }
}
