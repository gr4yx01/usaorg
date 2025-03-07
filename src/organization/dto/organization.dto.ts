import { IsNotEmpty, IsString } from 'class-validator';

export class OrganizationDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;
}

export class UserDto {
  @IsString()
  @IsNotEmpty()
  userId: string;
}
