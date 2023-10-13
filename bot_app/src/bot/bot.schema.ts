import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BotDocument = Bot & Document;

@Schema()
export class Bot {
  @Prop()
  token: string;
}

export const BotSchema = SchemaFactory.createForClass(Bot);
