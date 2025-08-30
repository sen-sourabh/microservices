import { Controller } from '@nestjs/common';
import { UsersService } from './users.service';
import { MessagePattern } from '@nestjs/microservices';
import { OPERATIONS } from '/shared/config/constant.ts';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @MessagePattern(OPERATIONS.list)
  findAll() {
    return this.usersService.findAll();
  }

  @MessagePattern(OPERATIONS.get)
  findOne() {
    return this.usersService.findOne();
  }

  @MessagePattern(OPERATIONS.create)
  createOne() {
    return this.usersService.createOne();
  }

  @MessagePattern(OPERATIONS.update)
  updateOne() {
    return this.usersService.updateOne();
  }
}
