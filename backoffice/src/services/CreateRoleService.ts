import { ROLES, RolesDTO } from '../constants/permissions';
import { BadRequestError } from '../errors/BadRequestError';
import { IRoleRepository } from '../repositories/IRoleRepository';

interface IRequest {
  name: string;
}

export class CreateRoleService {
  constructor(private roleRepository: IRoleRepository) {}

  async run({ name }: IRequest): Promise<void> {
    const roleName = name.toUpperCase().replace(' ', '_') as RolesDTO;
    const roleSlug = name.toLocaleLowerCase().replace(' ', '-');

    const findedRole = await this.roleRepository.findOne({
      slug: roleSlug,
    });

    if (!ROLES.includes(roleName)) {
      throw new BadRequestError('Essa ROLE não é válida');
    }

    if (findedRole) {
      throw new BadRequestError('Está ROLE já existe no sistema');
    }

    await this.roleRepository.create({
      name: roleName,
      slug: roleSlug,
    });
  }
}
