require("dotenv").config()
import { Sequelize } from 'sequelize-typescript';
import { User } from '../users/user.entity';
import { TypeUser } from '../typeUser/typeUser.entity';
const {
  DB_USERNAME, DB_PASSWORD, DB_HOST, DATABASE, DB_PORT
} = process.env;

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: DB_HOST,
        port: 5432,
        username: DB_USERNAME,
        password: DB_PASSWORD,
        database: DATABASE,
      });
      sequelize.addModels([TypeUser, User]);
      await sequelize.sync();
      return sequelize;
    },
  },
];