import { ICreateUser } from '../dtos/ICreateUser';
import { User } from '../entities/User';

export interface IFindParams {
  slug: string;
  name?: string;
}

export interface IUserRepository {
  findAll(): Promise<User[]>;
  findById(id: string): Promise<User | undefined>;
  findByEmail(email: string): Promise<User | undefined>;
  create(User_data: ICreateUser): Promise<void>;
  save(user: User): Promise<void>;
}
