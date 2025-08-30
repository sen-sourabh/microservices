import { NestFactory } from '@nestjs/core';
import { UsersModule } from './users.module';
import type { MicroserviceOptions } from '@nestjs/microservices';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(UsersModule, {
    transport: Transport.TCP,
    options: {
      port: 4001,
    },
  });

  await app.listen();
}
void bootstrap();
