import { Module } from '@nestjs/common';
import { PersonelInfoService } from './personel-info.service';
import { PersonelInfoController } from './personel-info.controller';

@Module({
  controllers: [PersonelInfoController],
  providers: [PersonelInfoService]
})
export class PersonelInfoModule {}
