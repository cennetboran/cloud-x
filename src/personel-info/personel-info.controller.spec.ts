import { Test, TestingModule } from '@nestjs/testing';
import { PersonelInfoController } from './personel-info.controller';
import { PersonelInfoService } from './personel-info.service';

describe('PersonelInfoController', () => {
  let controller: PersonelInfoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PersonelInfoController],
      providers: [PersonelInfoService],
    }).compile();

    controller = module.get<PersonelInfoController>(PersonelInfoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
