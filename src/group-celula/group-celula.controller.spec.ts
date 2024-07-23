import { Test, TestingModule } from '@nestjs/testing';
import { GroupCelulaController } from './group-celula.controller';

describe('GroupCelulaController', () => {
  let controller: GroupCelulaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GroupCelulaController],
    }).compile();

    controller = module.get<GroupCelulaController>(GroupCelulaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
