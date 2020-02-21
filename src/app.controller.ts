import {
  Controller,
  Get,
  Param,
  Delete,
  Put,
  Body,
  HttpCode,
  Post,
} from '@nestjs/common';
import { AppService } from './app.service';

export interface User {
  name: string;
  family: string;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/users')
  getUsers(): User[] {
    return this.appService.getAllUsers();
  }

  @Get('/users/:name')
  getUser(@Param('name') name): User {
    return this.appService.getUserByName(name);
  }

  @Delete('/users/:name')
  deleteUser(@Param('name') name): User {
    return this.appService.deleteUser(name);
  }
  @Put('/users/:name')
  @HttpCode(204)
  updateUser(@Param('name') name, @Body() updatedFields): User {
    return this.appService.updateUser(name, updatedFields);
  }

  @Post('/users')
  @HttpCode(201)
  addUser(@Body() newUser): User {
    return this.appService.addUser(newUser);
  }
}
