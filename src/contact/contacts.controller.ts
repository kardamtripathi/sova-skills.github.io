import * as bcrypt from 'bcrypt'
import { Controller, Get, Post, Body, Patch, Param, Delete, Put, UseGuards, Request, Query } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { CreateContactDto } from './dto/create-contact.dto';
import { VerifyContactDto } from './dto/verify-contact.dto';

@Controller('contact')
export class ContactsController {
  constructor(private readonly contactService: ContactsService) { }

  @Get(':id')
  getContact(@Param('id') id: string){
    return this.contactService.fetchContact(id);
  }

  @Post('post')
  async register(@Body() createContactDto: CreateContactDto) {
    createContactDto.otp = Math.floor(100000 + Math.random() * 900000);
    createContactDto.status = "unverified";
    return this.contactService.send(createContactDto);
  }

  @Post('verify')
  async verifyContact(@Body() verifyContactDto: VerifyContactDto) {
    return this.contactService.verifyContact(verifyContactDto);
  }

  @Post('genOTP')
  async genOTP(@Query('mobile') mobile: string){
    return this.contactService.genOTP(mobile);
  }

  @Get()
  findAll() {
    return this.contactService.findAll();
  }

}
