import { ConfigModule, ConfigService } from '@nestjs/config';
import { DataSource, DataSourceOptions } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

/*
PORT=8000

DB_HOST = localhost
DB_PORT=5432
DB_USER= ucodrr
DB_PASSWORD = secret1234
DB_NAME = codrrdb
*/

ConfigModule.forRoot({
  isGlobal: true,
  envFilePath: `.${process.env.NODE_ENV}.env`,
});
const configService = new ConfigService();

export const DataSourceConfig: DataSourceOptions = {
  type: 'postgres', // Especifica el tipo de base de datos, en este caso PostgreSQL.
  host: configService.get('DB_HOST'), // La dirección del host de la base de datos.
  port: configService.get('DB_PORT'), // El puerto en el que la base de datos está escuchando.
  username: configService.get('DB_USER'), // El nombre de usuario para la autenticación en la base de datos.
  password: configService.get('DB_PASSWORD'), // La contraseña para la autenticación en la base de datos.
  database: configService.get('DB_NAME'), // El nombre de la base de datos.
  entities: [__dirname + '/../**/*.entity{.ts,.js}'], // La ruta a las entidades (clases que representan las tablas en la base de datos).
  migrations: [__dirname + '/../migrations/*{.ts,.js}'], // La ruta a los archivos de migración.
  synchronize: false, // Si `true`, TypeORM sincroniza la base de datos con las entidades cada vez que se conecta. `false` es más seguro en producción.
  migrationsRun: true, // Si `true`, TypeORM ejecutará las migraciones pendientes al iniciar.
  logging: false, // Si `true`, TypeORM registrará todas las consultas de la base de datos en la consola.
  namingStrategy: new SnakeNamingStrategy(), // Especifica la estrategia de nombramiento para las tablas y columnas. `SnakeNamingStrategy` convierte nombres a snake_case.
};

export const AppDS = new DataSource(DataSourceConfig); // Crea una nueva instancia de `DataSource` con la configuración proporcionada
