import { ApiProperty } from '@nestjs/swagger';

export class CreateResourceDto {
  @ApiProperty()
  firstName: string;
  @ApiProperty()
  lastName: string;
  @ApiProperty()
  isActive: boolean;
}
