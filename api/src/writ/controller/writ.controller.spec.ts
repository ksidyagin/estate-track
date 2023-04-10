import { Test, TestingModule } from '@nestjs/testing';
import { WritController } from './writ.controller';

describe('WritController', () => {
  let controller: WritController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WritController],
    }).compile();

    controller = module.get<WritController>(WritController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
