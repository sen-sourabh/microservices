import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { ClientProxyFactory } from '@nestjs/microservices';
import { ClientConfigsModule } from '../client-configs/client-configs.module';
import { ClientConfigsService } from '../client-configs/client-configs.service';
import { PROVIDER_CLIENT } from '/shared/config/constant.ts';

@Module({
  imports: [ClientConfigsModule],
  controllers: [UsersController],
  providers: [
    UsersService,
    {
      provide: PROVIDER_CLIENT.users,
      useFactory: (clientConfigService: ClientConfigsService) => {
        const clientOptions = clientConfigService.getAuthClientOptions(PROVIDER_CLIENT.users);
        return ClientProxyFactory.create(clientOptions);
      },
      inject: [ClientConfigsService],
    },
  ],
})
export class UsersModule {}
