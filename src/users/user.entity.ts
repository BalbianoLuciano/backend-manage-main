import { Table, Column, Model, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { TypeUser } from '../typeUser/typeUser.entity';

@Table
export class User extends Model {
  
  @Column({primaryKey: true})
  id?: number;

  @Column
  name: string;

  @Column
  mail: string;

  @ForeignKey(() => TypeUser)
  @Column
  typeUserId: number

  @BelongsTo(()=> TypeUser)
  typeUser: TypeUser
}