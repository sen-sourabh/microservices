import { NestFactory } from '@nestjs/core';
import { ApiGatewayModule } from './api-gateway.module';
import type { MicroserviceOptions } from '@nestjs/microservices';
import { Transport } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';
import { SwaggerConfig } from '/shared/swagger/index.ts';
import { Logger, ValidationPipe } from '@nestjs/common';

const logger = new Logger();

const AppInfo = (configService: ConfigService): void => {
  const protocol = configService.getOrThrow<string>('protocol');
  const host = configService.getOrThrow<string>('host');
  const port = configService.getOrThrow<string>('ports.gateway');

  logger.verbose(`Swagger documentation ${protocol}://${host}:${port}/api`);
  logger.verbose(`Server running on ${protocol}://${host}:${port}`);
};

async function bootstrap() {
  const app = await NestFactory.create(ApiGatewayModule);
  const configService = app.get(ConfigService);

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.TCP,
    options: {
      // host: 'localhost',
      port: configService.getOrThrow<number>('ports.users'),
    },
  });
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.TCP,
    options: {
      // host: 'localhost',
      port: configService.getOrThrow<number>('ports.auth'),
    },
  });

  // INFO: To start all microservices apps
  await app.startAllMicroservices();

  //To set the global prefix within the endpoints
  app.setGlobalPrefix('api');

  //Global Validation Pipe
  app.useGlobalPipes(new ValidationPipe());

  //Swagger configurations
  SwaggerConfig(app);

  await app.listen(configService.getOrThrow<number>('ports.gateway'));

  AppInfo(configService);
}
void bootstrap();
