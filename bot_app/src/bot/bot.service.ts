import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { BotDTO } from './bot.dto';
import { Bot } from './bot.schema';
import { Model } from 'mongoose';

@Injectable()
export class BotService {
  constructor(@InjectModel('Bot') private botModel: Model<Bot>) {}

  async updateToken(token: string): Promise<string> {
    try {
      // Find the one and only document in the collection and update its token.
      const updatedBot = await this.botModel.findOneAndUpdate(
        {},
        { token: token },
      );

      if (!updatedBot) {
        // If updatedBot is null or undefined, it means no document was found.
        return 'No bot found to update.';
      }

      return 'Token updated successfully.';
    } catch (error) {
      return 'Error updating token: ' + error.message;
    }
  }

  async getToken(): Promise<Bot[]> {
    try {
      const bots = await this.botModel.find().exec();
      return bots;
    } catch (err) {
      console.log(`Error getting bots:`, err);
    }
  }
}
