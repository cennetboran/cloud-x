import { Injectable } from '@nestjs/common';
import { CreatePersonelInfoDto } from './dto/create-personel-info.dto';
import { UpdatePersonelInfoDto } from './dto/update-personel-info.dto';

@Injectable()
export class PersonelInfoService {
  create(createPersonelInfoDto: CreatePersonelInfoDto) {
    return 'This action adds a new personelInfo';
  }

  findAll() {
    return `This action returns all personelInfo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} personelInfo`;
  }

  update(id: number, updatePersonelInfoDto: UpdatePersonelInfoDto) {
    return `This action updates a #${id} personelInfo`;
  }

  remove(id: number) {
    return `This action removes a #${id} personelInfo`;
  }
}
