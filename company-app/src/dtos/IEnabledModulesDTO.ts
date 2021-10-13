interface Module {
  name: string;
  slug: string;
}

export interface IEnabledModulesDTO {
  company_token: string;
  modules: Module[];
}
