import { Module } from '@nestjs/common';
import { StudentsService } from './students.service';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentSchema } from './schemas/student.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Student', schema: StudentSchema }])
  ],
  providers: [StudentsService],
  controllers: [],
  exports: [StudentsService],

})
export class StudentsModule {}