import { Test, TestingModule } from '@nestjs/testing';
import { WritService } from './writ.service';

describe('WritService', () => {
  let service: WritService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WritService],
    }).compile();

    service = module.get<WritService>(WritService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
