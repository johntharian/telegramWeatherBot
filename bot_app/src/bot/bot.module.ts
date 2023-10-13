import { Module } from '@nestjs/common';
import { BotController } from './bot.controller';
import { BotService } from './bot.service';
import { BotSchema } from './bot.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Bot', schema: BotSchema }])],
  controllers: [BotController],
  providers: [BotService],
})
export class BotModule {}
