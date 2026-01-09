import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Global prefix for all routes
  app.setGlobalPrefix('api');

  // Enable validation
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  );

  // Enable CORS for development
  app.enableCors({
    origin: 'http://localhost:3000',
    credentials: true,
  });

  await app.listen(3001);
  console.log('API running on http://localhost:3001');
}
bootstrap();
