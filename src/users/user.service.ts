import { Injectable, Inject } from '@nestjs/common';
import { TypeUser } from '../typeUser/typeUser.entity';
import { MakeUserDto } from './dto/user.dto';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USERS_REPOSITORY')
    private usersRepository: typeof User
  ) {}

  async findAll(): Promise<User[]> {
    return await this.usersRepository.findAll<User>({
      include : {
        model: TypeUser,
        attributes : ["name"]
      }
    });
  }
  async createUser(makeUserDto: MakeUserDto): Promise <User> {
    let {
      id,
      name,
      mail,
      typeUser
    } = makeUserDto

    const user = this.usersRepository.create({
      id,
      name,
      mail,
      typeUser
    })
    return user
  } 

}
