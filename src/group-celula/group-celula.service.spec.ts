import { Test, TestingModule } from '@nestjs/testing';
import { GroupCelulaService } from './group-celula.service';

describe('GroupCelulaService', () => {
  let service: GroupCelulaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GroupCelulaService],
    }).compile();

    service = module.get<GroupCelulaService>(GroupCelulaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
