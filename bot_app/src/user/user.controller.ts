import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserDTO } from './user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/')
  async getAllUsers() {
    const result = await this.userService.getAllUsers();
    return result;
  }

  @Post('/')
  async addUser(@Body() userDTO: UserDTO) {
    const result = await this.userService.addUser(userDTO);
    return result;
  }

  @Delete('/:chatId')
  async removeUser(@Param('chatId') chatId: number) {
    const result = await this.userService.removeUser(chatId);
    return result;
  }

  @Put('/:chatId')
  async changeStatus(
    @Param('chatId') chatId: number,
    @Body() body: { status: string },
  ) {
    const { status } = body;
    const result = await this.userService.changeStatus(chatId, status);
    return result;
  }
}
