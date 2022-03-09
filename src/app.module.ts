import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ContactsModule } from './contact/contacts.module';
import { DatabaseModule } from './database/database.module';
import { StudentsModule } from './students/students.module';

@Module({
  imports: [StudentsModule, AuthModule, DatabaseModule, ContactsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
