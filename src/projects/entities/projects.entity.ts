import { BaseEntity } from 'src/config/base.entity';
import { IProject } from '../../interfaces/project.interface';
import { UserProjectEntity } from '../../users/entities/usersProjects.entity';

import { Column, Entity, OneToMany } from 'typeorm';

@Entity({ name: 'projects' }) // se pone esto para declarra a que tabla pertenece o interface
export class ProjectEntity extends BaseEntity implements IProject {
  @Column()
  name: string;
  @Column()
  description: string;
  @OneToMany(() => UserProjectEntity, (usersProjects) => usersProjects.project)
  usersIncludes: UserProjectEntity[];
}
