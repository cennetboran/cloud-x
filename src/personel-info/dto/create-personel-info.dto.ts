import { ApiProperty } from '@nestjs/swagger';

export class CreatePersonelInfoDto {
  @ApiProperty()
  firstName: string;
  @ApiProperty()
  lastName: string;
  @ApiProperty()
  isActive: boolean;
}
