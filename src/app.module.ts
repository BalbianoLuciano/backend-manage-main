import { Module } from '@nestjs/common';
import { TypeUserModule } from './typeUser/typeUser.module';
import { UsersModule } from './users/user.module';


@Module({
  imports: [TypeUserModule, UsersModule],
})
export class AppModule {}
