import {
  IsMongoId,
  IsEmail,
  IsPhoneNumber,
  Length,
  IsOptional,
} from 'class-validator';

export default class UpdateUserDto {
  @IsMongoId()
  @IsOptional()
  _id?: string;
  @IsEmail()
  @IsOptional()
  email?: string;
  @IsOptional()
  password?: string;
  @IsPhoneNumber('TN')
  @IsOptional()
  phone?: string;
  @Length(2, 25)
  @IsOptional()
  firstName?: string;
  @Length(2, 25)
  @IsOptional()
  lastName?: string;
}
