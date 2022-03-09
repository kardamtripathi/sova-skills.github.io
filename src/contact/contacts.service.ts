import { HttpCode, HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateContactDto } from './dto/create-contact.dto';
import { Contact, ContactDocument } from './schemas/contact.schema';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt'
import { VerifyContactDto } from './dto/verify-contact.dto';

@Injectable()
export class ContactsService {

  constructor(@InjectModel(Contact.name) private contactModel: Model<ContactDocument>,private readonly jwtService: JwtService) { }

  async fetchContact(id: string): Promise<Contact>{
    return await this.contactModel.findById(id).exec();
  }

  async send(createContactDto: CreateContactDto): Promise<Contact> {
    let contact = await this.contactModel.findOne({ mobile: createContactDto.mobile }).exec();
    return new this.contactModel(createContactDto).save();
  }

  async verifyContact(verifyUserDto: VerifyContactDto): Promise<any> {
    let user = await this.contactModel.findOne({ mobile: verifyUserDto.mobile }).exec();
    if(verifyUserDto.otp == user.otp){
      await this.contactModel.findByIdAndUpdate(user.id, { status: 'verified' }).exec();
      return {
        Mobile: user.mobile,
        Result: "verified"
      };
    }
    throw new HttpException({ Result: "Incorrect OTP. Try Again." }, 422)
  }

  async findAll(): Promise<Contact[]> {
    return await this.contactModel.find().exec()
  }

  async genOTP(mobile: string): Promise<Contact>{
    let contact = await this.contactModel.findOne({ mobile: mobile }).exec();
    let newOTP = Math.floor(100000 + Math.random() * 900000);
    return await this.contactModel.findByIdAndUpdate(contact.id, {otp: newOTP}, { new: true });
  }

}
