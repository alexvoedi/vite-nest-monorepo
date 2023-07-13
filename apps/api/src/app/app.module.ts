import { Module } from '@nestjs/common';
import { UserModule } from '@/user/user.module';
import { ConfigModule } from '@/common/config/config.module';
import { ScheduleModule } from '@/common/schedule/schedule.module';
import { CacheModule } from '@/common/cache/cache.module';
import { EventEmitterModule } from '@/common/event-emitter/event-emitter.module';
import { GqlModule } from '@/common/gql/gql.module';
import { ThrottlerModule } from '@/common/throttler/throttler.module';
import { LoggerModule } from '@/common/logger/logger.module';
import { HealthModule } from '@/common/health/health.module';

@Module({
  imports: [
    ConfigModule,
    LoggerModule,
    ScheduleModule,
    CacheModule,
    EventEmitterModule,
    HealthModule,
    GqlModule,
    ThrottlerModule,
    UserModule,
  ],
})
export class AppModule {}
