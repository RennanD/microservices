import { getRepository, Repository } from 'typeorm';
import { ICreateUser } from '../../dtos/ICreateUser';
import { User } from '../../entities/User';
import { IUserRepository } from '../IUserRepository';

export class UserRepositoryTypeOrm implements IUserRepository {
  private typeOrmRepository: Repository<User>;

  constructor() {
    this.typeOrmRepository = getRepository(User);
  }

  async findAll(): Promise<User[]> {
    return this.typeOrmRepository.find();
  }

  async findById(id: string): Promise<User | undefined> {
    return this.typeOrmRepository.findOne(id);
  }

  async findByEmail(email: string): Promise<User | undefined> {
    return this.typeOrmRepository.findOne({ email });
  }

  async create(user_data: ICreateUser): Promise<void> {
    const user = this.typeOrmRepository.create(user_data);

    await this.typeOrmRepository.save(user);
  }

  async save(user: User): Promise<void> {
    await this.typeOrmRepository.save(user);
  }
}
