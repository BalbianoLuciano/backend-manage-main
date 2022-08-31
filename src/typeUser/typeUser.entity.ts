import { Table, Column, Model, HasMany} from 'sequelize-typescript';
import { User } from '../users/user.entity';

@Table
export class TypeUser extends Model {
  @Column
  name: string;

  @HasMany(() => User)
  Users: User[]
}