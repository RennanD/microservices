import { BadRequestError } from '../errors/BadRequestError';
import { IModulesRepository } from '../repositories/IModulesRepository';

interface IRequest {
  name: string;
  slug: string;
}

export class CreateModulesService {
  constructor(private modulesRepository: IModulesRepository) {}

  async run({ name, slug }: IRequest): Promise<void> {
    const existentModule = await this.modulesRepository.findOne({ slug });

    if (existentModule) {
      throw new BadRequestError('O módulo já existe no sistema');
    }

    await this.modulesRepository.cretae({
      name,
      slug,
    });
  }
}
