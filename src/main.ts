import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';
import * as morgan from 'morgan';
import { CORS } from './constants';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(morgan('dev'));

  const configService = app.get(ConfigService);
  app.enableCors(CORS); //llamamos el cors de index de la carpeta constant
  app.setGlobalPrefix('api'); //ahora le ponemos esto en postman para hacer consultas localhost:8000/api/users/say-hello

  await app.listen(configService.get('PORT'));
  console.log('llamando al puerto: ' + configService.get('PORT')); //para ver el puerto por consola y ver que esta levantado
  console.log(`Application running on: ${await app.getUrl()}`); //para ver el puerto en consola mediante un link
}
bootstrap();
