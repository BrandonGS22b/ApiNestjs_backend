import { IProject } from 'src/interfaces/project.interface';

import { BaseEntity, Column, Entity } from 'typeorm';

@Entity({ name: 'projects' }) // se pone esto para declarra a que tabla pertenece o interface
export class UserEntity extends BaseEntity implements IProject {
  @Column()
  id: number;
  name: string;
  @Column()
  description: string;
}
