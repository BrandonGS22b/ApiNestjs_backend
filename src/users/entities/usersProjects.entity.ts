import { BaseEntity, Column, ManyToOne } from 'typeorm';
import { UserEntity } from './users.entity';
import { ACCEDD_LEVEL } from 'src/constants/roles';
import { ProjectEntity } from 'src/projects/entities/projects.entity';

export class UserProjectEntity extends BaseEntity {
  @Column({ type: 'enum', enum: ACCEDD_LEVEL })
  accessedLevel: ACCEDD_LEVEL;

  @ManyToOne(() => UserEntity, (user) => user.projectsIncludes)
  user: UserEntity;

  @ManyToOne(() => ProjectEntity, (projects) => projects.userIncludes)
  project: ProjectEntity;
}
