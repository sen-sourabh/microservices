import { Module } from '@nestjs/common';
import { ClientConfigsService } from './client-configs.service';
import { ConfigModule } from '@nestjs/config';
import configuration from '/shared/config/configuration.ts';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env'],
      isGlobal: true,
      cache: true,
      expandVariables: true,
      load: [configuration],
    }),
  ],
  providers: [ClientConfigsService],
  exports: [ClientConfigsService],
})
export class ClientConfigsModule {}
