import {
  IsBoolean,
  IsDate,
  IsMongoId,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class UpdateCustomerDto {
  @IsMongoId()
  @IsOptional()
  _id?: string;
  @IsOptional()
  @IsString()
  @MaxLength(30)
  @MinLength(2)
  fullname: string;
  @IsOptional()
  @IsNumber()
  @IsPositive()
  @MaxLength(2)
  age: number;
  @IsOptional()
  @IsString()
  @IsDate()
  birthdate: string;
  @IsOptional()
  @IsBoolean()
  status: boolean;
}
