import type { TestingModule } from '@nestjs/testing';
import { Test } from '@nestjs/testing';
import { UsersController } from '../users.controller';
import { UsersService } from '../users.service';

describe('UsersController', () => {
  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService],
    }).compile();

    // Get the controller instance for future use
    app.get<UsersController>(UsersController);
  });
});
