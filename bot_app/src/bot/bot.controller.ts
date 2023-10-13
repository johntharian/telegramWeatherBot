import { Controller, Get, Param, Put } from '@nestjs/common';
import { BotService } from './bot.service';

@Controller('bot')
export class BotController {
  constructor(private readonly botService: BotService) {}

  @Get('/')
  async getToken() {
    const result = await this.botService.getToken();
    return result;
  }
  @Put('/:token')
  async updateToken(@Param('token') token: string) {
    const result = await this.botService.updateToken(token);
    return result;
  }
}
