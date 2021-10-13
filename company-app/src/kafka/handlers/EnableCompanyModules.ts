import { IEnabledModulesRepository } from '../../repositories/IEnabledModulesRepository';
import { KafkaHandler } from '../core/KafkaHandler';

interface IModules {
  name: string;
  slug: string;
}

interface IRequest {
  company_token: string;
  enabled_modules: IModules[];
}

export class EnableCompanyModules implements KafkaHandler {
  constructor(private enabledModulesRepository: IEnabledModulesRepository) {}

  async handle({
    company_token,
    enabled_modules: modules,
  }: IRequest): Promise<void> {
    const existentModules = await this.enabledModulesRepository.findAll(
      company_token,
    );

    console.log({
      company_token,
      modules,
    });

    if (!existentModules) {
      await this.enabledModulesRepository.create({
        company_token,
        modules,
      });

      return;
    }

    existentModules.modules = modules;

    await this.enabledModulesRepository.save(existentModules);
  }
}
