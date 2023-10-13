import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { BotModule } from './bot/bot.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://johntharianmec:NQy88gOAa51jK3p4@searchdb.fefjva0.mongodb.net/telegram_bot?retryWrites=true&w=majority',
    ),
    UserModule,
    BotModule,
  ],
  // imports: [UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
