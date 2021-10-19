import { NextFunction, Request, Response } from 'express';
import { verify, TokenExpiredError } from 'jsonwebtoken';

import { RolesDTO } from '../constants/permissions';

import { AuthError } from '../errors/AuthError';
import { UserRepositoryTypeOrm } from '../repositories/typeorm/UserRepositoryTypeOrm';

interface IPaylod {
  sub: string;
}

interface ITokenSubject {
  user_id: string;
  role: RolesDTO;
}

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
): Promise<void> {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AuthError('Você precisa fornecer o token de acesso');
  }

  const [, token] = authHeader.split(' ');

  try {
    const { sub } = verify(token, '') as IPaylod;

    const { user_id, role } = JSON.parse(sub) as ITokenSubject;

    const userRepository = new UserRepositoryTypeOrm();

    const user = await userRepository.findById(user_id);

    if (!user) {
      throw new AuthError('Usuário não encontrado na plataforma');
    }

    request.user = {
      id: user_id,
      role,
    };

    return next();
  } catch (error) {
    if (error instanceof TokenExpiredError) {
      throw new AuthError('Seu token expirou', 'expired_token');
    }

    throw new AuthError('Token inválido');
  }
}
