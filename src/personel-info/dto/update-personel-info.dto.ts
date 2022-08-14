import { PartialType } from '@nestjs/mapped-types';
import { CreatePersonelInfoDto } from './create-personel-info.dto';

export class UpdatePersonelInfoDto extends PartialType(CreatePersonelInfoDto) {}
