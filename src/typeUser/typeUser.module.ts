import { Module } from '@nestjs/common';
import { TypeUsersService } from './typeUser.service';
import { TypeUsersProviders } from './typeUser.provider';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [
    TypeUsersService,
    ...TypeUsersProviders,
  ],
})
export class TypeUserModule {}