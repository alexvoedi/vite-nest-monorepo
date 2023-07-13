import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { Logger } from 'nestjs-pino';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
    {
      bufferLogs: true,
    },
  );

  const logger = app.get(Logger);

  app.useLogger(logger);

  app.enableCors();

  const PORT = process.env.PORT || 3000;

  await app.listen(PORT, '0.0.0.0', () => {
    logger.log(`Listening on port ${PORT}`, 'NestApplication');
  });
}

bootstrap();
