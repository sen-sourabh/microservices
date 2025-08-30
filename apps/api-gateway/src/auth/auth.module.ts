import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { ClientProxyFactory } from '@nestjs/microservices';
import { ClientConfigsService } from '../client-configs/client-configs.service';
import { ClientConfigsModule } from '../client-configs/client-configs.module';
import { PROVIDER_CLIENT } from '/shared/config/constant.ts';

@Module({
  imports: [ClientConfigsModule],
  controllers: [AuthController],
  providers: [
    AuthService,
    {
      provide: PROVIDER_CLIENT.auth,
      useFactory: (clientConfigService: ClientConfigsService) => {
        const clientOptions = clientConfigService.getAuthClientOptions(PROVIDER_CLIENT.auth);
        return ClientProxyFactory.create(clientOptions);
      },
      inject: [ClientConfigsService],
    },
  ],
})
export class AuthModule {}
