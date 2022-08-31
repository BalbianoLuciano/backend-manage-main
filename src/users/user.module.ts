import { Module } from '@nestjs/common';
import { UsersService } from './user.service';
import { usersProviders } from './user.provider';
import { DatabaseModule } from '../database/database.module';
import { UsersController } from './users.controller';

@Module({
  imports: [DatabaseModule],
  providers: [
    UsersService,
    ...usersProviders,
  ],
  controllers: [UsersController],
})
export class UsersModule {}