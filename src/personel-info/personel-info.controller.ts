import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PersonelInfoService } from './personel-info.service';
import { CreatePersonelInfoDto } from './dto/create-personel-info.dto';
import { UpdatePersonelInfoDto } from './dto/update-personel-info.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('personal-info')
@Controller('personel-info')
export class PersonelInfoController {
  constructor(private readonly personelInfoService: PersonelInfoService) {}

  @Post()
  create(@Body() createPersonelInfoDto: CreatePersonelInfoDto) {
    return this.personelInfoService.create(createPersonelInfoDto);
  }

  @Get()
  findAll() {
    return this.personelInfoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.personelInfoService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePersonelInfoDto: UpdatePersonelInfoDto,
  ) {
    return this.personelInfoService.update(+id, updatePersonelInfoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.personelInfoService.remove(+id);
  }
}
