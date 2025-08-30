import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Transport } from '@nestjs/microservices';
import { MicroClientOptions } from './utils/type';

@Injectable()
export class ClientConfigsService {
  constructor(private readonly configService: ConfigService) {}

  private getMicroservicesCommonOptions(clientName: string) {
    return {
      port: this.configService.getOrThrow<number>(`ports.${String(clientName)}`),
    };
  }

  getAuthClientOptions(clientName: string): MicroClientOptions {
    return {
      name: clientName,
      transport: Transport.TCP,
      options: this.getMicroservicesCommonOptions(clientName),
    };
  }
}
