import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CustomerDocument = Customer & Document;

@Schema()
export default class Customer {
  @Prop({ required: true, type: String })
  fullname: string;

  @Prop({ required: true, type: Number })
  age: number;

  @Prop({ required: true, type: String })
  birthdate: string;

  @Prop({ required: true, type: Boolean })
  status: boolean;
}

export const CustomerSchema = SchemaFactory.createForClass(Customer);
