import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { Transport } from '@nestjs/common/enums/transport.enum';
import { join } from 'path';

// Create a logger instance
const logger  = new Logger('Main');

const microserviceOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'app', // name of the proto package
    protoPath: join(__dirname, '../src/app.proto'),
  },
};

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, microserviceOptions);
  app.listen(() => logger.log('Microservice is listening...'));
}
bootstrap();
