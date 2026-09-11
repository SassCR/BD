import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //Validadores
  //utilizamos no formato decorator @Isnumber(), Isnotempty)

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, //Permite apenas campos que estão no DTD
    forbidNonWhitelisted: true //Lançar erro quando receber campos que não estão no DTO
  }));


  await app.listen(process.env.PORT ?? 3000);
}
await bootstrap();
