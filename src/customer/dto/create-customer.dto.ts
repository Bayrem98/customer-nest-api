import {
  IsBoolean,
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateCustomerDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  @MaxLength(30)
  fullname: string;
  @IsNotEmpty()
  @IsNumber()
  @MaxLength(2)
  age: number;
  @IsNotEmpty()
  @IsString()
  @IsDate()
  birthdate: string;
  @IsNotEmpty()
  @IsBoolean()
  status: boolean;
}
