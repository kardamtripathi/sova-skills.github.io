import { IsNotEmpty, IsPhoneNumber, IsString } from "class-validator";

export class CreateContactDto {

  @IsNotEmpty()
  @IsPhoneNumber('IN')
  mobile: string

  @IsNotEmpty()
  @IsString()
  name: string
  
  @IsNotEmpty()
  @IsString()
  city: string

  otp: number

  status: string

}
