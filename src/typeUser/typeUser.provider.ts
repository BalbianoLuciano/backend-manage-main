import { TypeUser } from './typeUser.entity';

export const TypeUsersProviders = [
  {
    provide: 'TYPEUSER_REPOSITORY',
    useValue: TypeUser,
  },
];