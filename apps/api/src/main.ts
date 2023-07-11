import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { Logger } from 'nestjs-pino';
import compression from '@fastify/compress';
import helmet from '@fastify/helmet';
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

  await app.register(compression, { encodings: ['gzip', 'deflate'] });

  await app.register(helmet, {
    contentSecurityPolicy: {
      directives: {
        defaultSrc: [`'self'`, 'unpkg.com'],
        styleSrc: [
          `'self'`,
          `'unsafe-inline'`,
          'cdn.jsdelivr.net',
          'fonts.googleapis.com',
          'unpkg.com',
        ],
        fontSrc: [`'self'`, 'fonts.gstatic.com', 'data:'],
        imgSrc: [`'self'`, 'data:', 'cdn.jsdelivr.net'],
        scriptSrc: [
          `'self'`,
          `https: 'unsafe-inline'`,
          `cdn.jsdelivr.net`,
          `'unsafe-eval'`,
        ],
      },
    },
  });

  app.enableCors();

  const PORT = process.env.PORT || 3000;

  await app.listen(PORT, '0.0.0.0', () => {
    logger.log(`Listening on port ${PORT}`, 'NestApplication');
  });
}

bootstrap();
