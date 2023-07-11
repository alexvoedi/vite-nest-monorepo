import { Module } from '@nestjs/common';
import { LoggerModule as NestLoggerModule } from 'nestjs-pino';

@Module({
  imports: [
    NestLoggerModule.forRoot({
      pinoHttp: {
        level: process.env.NODE_ENV === 'production' ? 'info' : 'debug',
        transport:
          process.env.NODE_ENV === 'production'
            ? undefined
            : {
                target: 'pino-pretty',
                options: {
                  colorize: true,
                  singleLine: true,
                },
              },
      },
    }),
  ],
})
export class LoggerModule {}
