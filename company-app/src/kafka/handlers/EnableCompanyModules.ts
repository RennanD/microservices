import { IEnabledModulesRepository } from '../../repositories/IEnabledModulesRepository';

interface IModules {
  name: string;
  slug: string;
}

interface IRequest {
  company_token: string;
  modules: IModules[];
}

export class EnableCompanyModules {
  constructor(private enabledModulesRepository: IEnabledModulesRepository) {}

  async handle({ company_token, modules }: IRequest): Promise<void> {
    const existentModules = await this.enabledModulesRepository.findAll(
      company_token,
    );

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
