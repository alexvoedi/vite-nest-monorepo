import { Module } from '@nestjs/common';
import { ThrottlerModule as NestThrottlerModule } from '@nestjs/throttler';

@Module({
  imports: [
    NestThrottlerModule.forRoot({
      ttl: 60,
      limit: 1000,
    }),
  ],
})
export class ThrottlerModule {}
