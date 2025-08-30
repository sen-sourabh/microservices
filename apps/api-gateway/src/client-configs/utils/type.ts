import type { ClientOptions } from '@nestjs/microservices';

export type MicroClientOptions = ClientOptions & {
  name: string;
};
