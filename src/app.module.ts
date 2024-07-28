import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSourceConfig } from './config/data.source';
import { ProjectsModule } from './projects/projects.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.develop.env`,
    }),
    TypeOrmModule.forRoot({ ...DataSourceConfig }), //para pasarlo sin los puntos ya que lo estoy mandando como objeto le quito los puntos y llaves
    UsersModule,
    ProjectsModule,
  ],
})
export class AppModule {}
