import { NestFactory } from '@nestjs/core';
import { AuthModule } from './auth.module';
import type { MicroserviceOptions } from '@nestjs/microservices';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AuthModule, {
    transport: Transport.TCP,
    options: {
      port: 4002,
    },
  });
  await app.listen();
}
void bootstrap();
