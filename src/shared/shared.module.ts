import { Module } from '@nestjs/common';
import { RedisService } from './redis/redis.service';
import { CacheModule } from '@nestjs/cache-manager';
import { redisStore } from 'cache-manager-redis-store';
import { RabbitmqService } from './rabbitmq/rabbitmq.service';

@Module({
  imports: [
    CacheModule.register({
        store: redisStore,
        host: 'localhost',
        port: 6379,
        password: process.env.REDIS_PASSWORD, // Use as variáveis do seu .env
        ttl: 600, // TTL padrão em segundos (opcional)
      }),
  ],
  providers: [RabbitmqService, RedisService],
  exports: [RedisService]
})
export class SharedModule {}
