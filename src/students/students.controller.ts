import { Body, Controller, Post } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { StudentsService } from './students.service';
import { AuthService } from '../auth/auth.service';

@Controller('student')
export class AuthController {
    constructor(
        private studentService: StudentsService,
        private authService: AuthService,
        
      ) {}

    @Post('register')
    async register(@Body() registerDTO: CreateStudentDto) {
        const user = await this.studentService.create(registerDTO);
        const payload = {
            email: user.email,
        };
    
        const token = await this.authService.signPayload(payload);
        return { user, token };
    }
    
    @Post('login')
    async login(@Body() loginDTO: CreateStudentDto) {
      const user = await this.studentService.findByLogin(loginDTO);
      const payload = {
        email: user.email,
      };
      const token = await this.authService.signPayload(payload);
      return { user, token};
    }

}