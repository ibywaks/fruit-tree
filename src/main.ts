import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SimpleLoggerMiddleware } from './middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(SimpleLoggerMiddleware);
  await app.listen(3000);
}
bootstrap();
