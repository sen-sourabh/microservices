import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { OPERATIONS, PROVIDER_CLIENT } from '/shared/config/constant.ts';

@Injectable()
export class UsersService {
  constructor(@Inject(PROVIDER_CLIENT.users) private usersClient: ClientProxy) {}

  findAll() {
    return this.usersClient.send(OPERATIONS.list, {});
  }
}
