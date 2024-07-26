import { DataSource, DataSourceOptions } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

export const DataSourceConfig: DataSourceOptions = {
  type: 'postgres', // Especifica el tipo de base de datos, en este caso PostgreSQL.
  host: '', // La dirección del host de la base de datos.
  port: 0, // El puerto en el que la base de datos está escuchando.
  username: '', // El nombre de usuario para la autenticación en la base de datos.
  password: '', // La contraseña para la autenticación en la base de datos.
  database: '', // El nombre de la base de datos.
  entities: [__dirname + '/../**/*.entity{.ts,.js}'], // La ruta a las entidades (clases que representan las tablas en la base de datos).
  migrations: [__dirname + '/../migrations/*{.ts,.js}'], // La ruta a los archivos de migración.
  synchronize: false, // Si `true`, TypeORM sincroniza la base de datos con las entidades cada vez que se conecta. `false` es más seguro en producción.
  migrationsRun: true, // Si `true`, TypeORM ejecutará las migraciones pendientes al iniciar.
  logging: false, // Si `true`, TypeORM registrará todas las consultas de la base de datos en la consola.
  namingStrategy: new SnakeNamingStrategy(), // Especifica la estrategia de nombramiento para las tablas y columnas. `SnakeNamingStrategy` convierte nombres a snake_case.
};

export const AppDS = new DataSource(DataSourceConfig); // Crea una nueva instancia de `DataSource` con la configuración proporcionada
