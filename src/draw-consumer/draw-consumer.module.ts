import { Module } from '@nestjs/common';
import { DrawConsumerService } from './draw-consumer.service';

@Module({
  providers: [DrawConsumerService]
})
export class DrawConsumerModule {}
