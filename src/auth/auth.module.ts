import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from '../students/students.controller';
import { StudentsModule } from '../students/students.module';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [StudentsModule],
  providers: [AuthService,JwtStrategy],
  controllers: [AuthController]
})
export class AuthModule {}
