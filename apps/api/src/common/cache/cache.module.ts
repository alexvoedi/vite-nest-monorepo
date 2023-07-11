import { Module } from '@nestjs/common';
import { CacheModule as NestCacheModule } from '@nestjs/cache-manager';

@Module({
  imports: [NestCacheModule.register()],
})
export class CacheModule {}
