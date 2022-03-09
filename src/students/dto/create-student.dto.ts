import { IsNotEmpty, IsString } from "class-validator";

export class CreateStudentDto {

  @IsNotEmpty()
  @IsString()
  email: string

  @IsNotEmpty()
  @IsString()
  password: string
}
