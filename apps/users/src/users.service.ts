import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  findAll() {
    return [
      {
        name: 'Raj',
        email: 'raj@example.com',
        password: 'Welcome@1234',
      },
      {
        name: 'Raju',
        email: 'raju@example.com',
        password: 'Welcome@1234',
      },
      {
        name: 'Rajni',
        email: 'rajni@example.com',
        password: 'Welcome@1234',
      },
      {
        name: 'Rajjo',
        email: 'rajjo@example.com',
        password: 'Welcome@1234',
      },
    ];
  }

  findOne() {
    return {
      name: 'Rajjo',
      email: 'rajjo@example.com',
      password: 'Welcome@1234',
    };
  }

  createOne() {
    // INFO: Database insert logic

    return {
      id: 1,
      name: 'Rajjo',
      email: 'rajjo@example.com',
      password: 'Welcome@1234',
    };
  }

  updateOne() {
    return {
      id: 1,
      name: 'Rajjo',
      email: 'rajjo@example.com',
      password: 'Welcome@12345',
    };
  }
}
