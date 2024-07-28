import { BaseEntity } from 'src/config/base.entity';
import { ROLES } from 'src/constants/roles';
import { Iuser } from 'src/interfaces/user.interface';
import { Column, Entity } from 'typeorm';
import { UserProjectEntity } from './usersProjects.entity';

@Entity({ name: 'users' })
export class UserEntity extends BaseEntity implements Iuser {
  @Column()
  firstName: string;
  @Column()
  lastName: string;
  @Column()
  age: number;
  @Column({ unique: true }) //el unique sirve para que no allan cosas duplicadas como correos etc
  email: string;
  @Column({ unique: true })
  password: string;
  @Column()
  usernames: string;
  @Column({ type: 'enum', enum: ROLES })
  role: ROLES; //[PASRA DEFINIR UN ROL DENTRO DE UNA IDENTIDAD LO TENEMOS QUE TIPAR]

  projectsIncludes: UserProjectEntity[];
}
