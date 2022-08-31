import { Body, Controller, Get, Post } from '@nestjs/common';
import { MakeUserDto } from './dto/user.dto';
import { User } from './user.entity';
import { UsersService } from './user.service';

@Controller('users')
export class UsersController {

    constructor( private readonly usersService: UsersService){}

    @Get()
    findAll(): Promise <User[]>{
        return this.usersService.findAll();
    }

    @Post()
    createUser(@Body() makeUserDto: MakeUserDto): Promise<User>{
        return this.usersService.createUser(makeUserDto)
    }
}
