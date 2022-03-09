import { Injectable } from '@nestjs/common';
import { Payload } from './payload';
import { sign } from 'jsonwebtoken';
import { StudentsService } from '../students/students.service';

@Injectable()
export class AuthService {

  constructor(private studentService: StudentsService) {}
  
  // Generates Token
  async signPayload(payload: Payload) {
    return sign(payload, "secretKey", { expiresIn: '7d' });
  }

  async validateUser(payload: Payload) {
    return await this.studentService.findByPayload(payload);
  }
 
}
