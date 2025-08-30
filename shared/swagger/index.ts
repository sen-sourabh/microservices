import { INestApplication } from '@nestjs/common';
import {
  DocumentBuilder,
  SwaggerCustomOptions,
  SwaggerDocumentOptions,
  SwaggerModule,
} from '@nestjs/swagger';
import { writeJsonToFile } from '../helpers/file-operations';

const SwaggerCustomOption: SwaggerCustomOptions = {
  swaggerUrl: 'http://localhost:4000/api',
  explorer: false,
  customfavIcon: 'https://static1.smartbear.co/swagger/media/assets/images/swagger_logo.svg',
  customSiteTitle: 'Micro',
  customCss: `
  .swagger-ui {
    zoom: 90%;
  }
`,
};

const SwaggerDocumentOption: SwaggerDocumentOptions = {
  operationIdFactory: (controllerKey: string, methodKey: string) => methodKey,
  deepScanRoutes: true,
  ignoreGlobalPrefix: false,
};

//Swagger Loader
const SwaggerLoader = () => {
  return new DocumentBuilder()
    .setTitle('Micro-api')
    .setDescription('Micro - Utilities')
    .setVersion('1.0')
    .setContact('Micro', 'Your website link', 'Your official gmail') // Set Contact information
    .addBearerAuth()
    .addServer('http://localhost:4000')
    .build();
};

//Swagger Initialization
export const SwaggerConfig = (app: INestApplication): void => {
  const document = SwaggerModule.createDocument(app, SwaggerLoader(), SwaggerDocumentOption);
  writeJsonToFile(document);
  SwaggerModule.setup('api', app, document, SwaggerCustomOption);
};
