import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // automaticamente se encarga de validar los datos que se envian en el body y solo acepta lo que forman el dto eso hace el whitelist:true
  //el forbidenonwhiteled ahora genera un problema cuando hay atributos de mas
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
  }));
  await app.listen(3000);
}
bootstrap();
