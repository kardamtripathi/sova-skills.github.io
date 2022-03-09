import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type ContactDocument = Contact & Document;

@Schema({ timestamps: true })
export class Contact {


  @Prop({ required: true, })
  mobile: string
  @Prop({ required: true })
  name: string
  @Prop({ required: true })
  city: string
  @Prop()
  otp: number
  @Prop()
  status: string

}


export const ContactSchema = SchemaFactory.createForClass(Contact);