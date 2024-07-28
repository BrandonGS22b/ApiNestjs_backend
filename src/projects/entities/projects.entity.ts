import { BaseEntity } from 'src/config/base.entity';
import { IProject } from 'src/interfaces/project.interface';
import { UserProjectEntity } from 'src/users/entities/usersProjects.entity';

import { Column, Entity } from 'typeorm';

@Entity({ name: 'projects' }) // se pone esto para declarra a que tabla pertenece o interface
export class ProjectEntity extends BaseEntity implements IProject {
  @Column()
  name: string;
  @Column()
  description: string;
  userIncludes: UserProjectEntity[];
}
