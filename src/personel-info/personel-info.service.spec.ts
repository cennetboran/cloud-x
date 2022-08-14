import { Test, TestingModule } from '@nestjs/testing';
import { PersonelInfoService } from './personel-info.service';

describe('PersonelInfoService', () => {
  let service: PersonelInfoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PersonelInfoService],
    }).compile();

    service = module.get<PersonelInfoService>(PersonelInfoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
