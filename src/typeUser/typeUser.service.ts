import { Injectable, Inject } from '@nestjs/common';
import { TypeUser } from './typeUser.entity';

@Injectable()
export class TypeUsersService {
  constructor(
    @Inject('TYPEUSER_REPOSITORY')
    private typeUserRepository: typeof TypeUser
  ) {}

  async findAll(): Promise<TypeUser[]> {
    return this.typeUserRepository.findAll<TypeUser>();
  }
}