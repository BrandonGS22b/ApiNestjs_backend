import { Iuser } from 'src/interfaces/user.interface';
import { BaseEntity, Column, Entity } from 'typeorm';

@Entity({ name: 'users' })
export class UserEntity extends BaseEntity implements Iuser {
  @Column()
  firstName: string;
  @Column()
  lastName: string;
  @Column()
  age: number;
  @Column()
  email: string;
  @Column()
  password: string;
  @Column()
  usernames: string;
  @Column()
  role: string;
}
