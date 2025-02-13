import { Test, TestingModule } from '@nestjs/testing';
import { DrawConsumerService } from './draw-consumer.service';

describe('DrawConsumerService', () => {
  let service: DrawConsumerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DrawConsumerService],
    }).compile();

    service = module.get<DrawConsumerService>(DrawConsumerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
