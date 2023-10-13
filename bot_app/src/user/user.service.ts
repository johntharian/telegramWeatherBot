import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserDTO } from './user.dto';
import { User } from './user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private userModel: Model<User>) {}

  async addUser(user: UserDTO): Promise<string> {
    console.log(user);

    const existingUser = await this.userModel.findOne({ chatId: user.chatId });

    if (existingUser) {
      return 'User already exists';
    }

    try {
      const newUser = await this.userModel.create(user);
      console.log(newUser);
      return 'User added successfully';
    } catch (error) {
      // Handle any errors here
      console.error('Error adding user:', error);
      return 'User could not be added.';
    }
  }

  async removeUser(chatId: number): Promise<string> {
    try {
      const removedUser = await this.userModel.findOneAndDelete({
        chatId: chatId,
      });
      console.log(removedUser);
      return 'User removed successfully';
    } catch (error) {
      console.log(`Error removing user:`, error);
      return 'User could not be removed';
    }
  }

  async getAllUsers(): Promise<User[]> {
    try {
      const users = await this.userModel.find().exec();
      return users;
    } catch (err) {
      console.log(`Error getting users:`, err);
    }
  }

  async changeStatus(chatId: number, status: string): Promise<string> {
    try {
      const updatedUser = await this.userModel.findOneAndUpdate(
        { chatId: chatId },
        { status: status },
        { new: true },
      );
      console.log(updatedUser);
      return 'Status changed successfully';
    } catch (err) {
      console.log(`Error changing status user:`, err);
      return 'status could not be changed';
    }
  }
}
