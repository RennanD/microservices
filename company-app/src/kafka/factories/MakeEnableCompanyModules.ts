import { EnabledModulesRepositoryMongoose } from '../../repositories/mongoose/EnabledModulesRepositoryMongoose';
import { EnableCompanyModules } from '../handlers/EnableCompanyModules';

export function makeEnableCompanyModules(): EnableCompanyModules {
  const enabledModulesRepositoryMongoose =
    new EnabledModulesRepositoryMongoose();

  const enableCompanyModules = new EnableCompanyModules(
    enabledModulesRepositoryMongoose,
  );

  return enableCompanyModules;
}
