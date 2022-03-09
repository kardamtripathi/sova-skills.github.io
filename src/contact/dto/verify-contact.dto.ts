import { IsNotEmpty } from 'class-validator';
import { CreateContactDto } from './create-contact.dto';

export class VerifyContactDto {
    @IsNotEmpty()
    mobile: string
    
    @IsNotEmpty()
    otp: number
}
