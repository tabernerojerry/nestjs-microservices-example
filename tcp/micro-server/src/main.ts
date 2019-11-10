import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { Transport } from '@nestjs/common/enums/transport.enum';

// Create a logger instance
const logger  = new Logger('Main');

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.TCP,
    /* options: {
      host: '127.0.0.1',
      port: 8877,
    }, */
  });
  app.listen(() => logger.log('Microservice is listening...'));
}
bootstrap();
