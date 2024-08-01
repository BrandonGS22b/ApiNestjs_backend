import { ConfigModule, ConfigService } from '@nestjs/config';
import { DataSource, DataSourceOptions } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { ProjectEntity } from '../projects/entities/projects.entity';
import { UserEntity } from '../users/entities/users.entity';
import { UserProjectEntity } from '../users/entities/usersProjects.entity';

// Carga el archivo de configuración .develop.env
ConfigModule.forRoot({
  envFilePath: `.develop.env`,
});

const configService = new ConfigService();

export const DataSourceConfig: DataSourceOptions = {
  type: 'postgres',
  host: configService.get('DB_HOST'),
  port: parseInt(configService.get('DB_PORT'), 10),
  username: configService.get('DB_USER'),
  password: configService.get('DB_PASSWORD'),
  database: configService.get('DB_NAME'),
  entities: [ProjectEntity, UserEntity, UserProjectEntity],
  migrations: [__dirname + '/../migrations/*{.ts,.js}'],
  synchronize: false,
  migrationsRun: true,
  logging: false,
  namingStrategy: new SnakeNamingStrategy(),
};

console.log('DB_HOST:', configService.get('DB_HOST'));
console.log('DB_PORT:', configService.get('DB_PORT'));
console.log('DB_USER:', configService.get('DB_USER'));
console.log('DB_PASSWORD:', configService.get('DB_PASSWORD'));
console.log('DB_NAME:', configService.get('DB_NAME'));

export const AppDS = new DataSource(DataSourceConfig);