import { Controller, Logger, Post, Body, OnModuleInit } from '@nestjs/common';
import { Client, ClientGrpc } from '@nestjs/microservices';

import { microserviceOptions } from './grpc.options';
import { IGrpcService } from './grpc.interface';
import { Observable } from 'rxjs';

@Controller()
export class AppController implements OnModuleInit {
  // Create a logger instance
  private logger =  new Logger('AppController');

  @Client(microserviceOptions)
  private client: ClientGrpc;

  private grpcService: IGrpcService;

  onModuleInit() {
    this.grpcService = this.client.getService<IGrpcService>('AppController');
  }

  @Post('add')
  accumulate(@Body('data') data: number[]): Observable<any> {
    this.logger.log('Adding ' + data.toString()); // Log something on every call
    return this.grpcService.accumulate({ data });
  }
}
