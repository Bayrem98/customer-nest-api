import { IsEmail, IsPhoneNumber, Length } from 'class-validator';

export default class CreateUserDto {
  @IsEmail()
  email: string;
  password: string;
  @IsPhoneNumber('TN')
  phone: string;
  @Length(2, 25)
  firstName: string;
  @Length(2, 25)
  lastName: string;
}
