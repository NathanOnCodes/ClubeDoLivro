import { Module } from '@nestjs/common';
import { RabbitmqService } from './rabbitmq/rabbitmq.service';
import { RedisService } from './redis/redis.service';

@Module({
  providers: [RabbitmqService, RedisService]
})
export class SharedModule {}
