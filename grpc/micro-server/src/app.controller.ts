import { Controller, Get, Logger, Post, Body } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { MathService } from './math.service';
import { Observable } from 'rxjs';

interface INumberArray {
  data: number[];
}

interface ISumOfNumberArray {
  sum: number;
}

@Controller()
export class AppController {
  // Create a logger instance
  private logger =  new Logger('AppController');

  constructor(private readonly mathService: MathService) {}

  // Define the gRPC method
  // Mapping the proto file 'AppController', 'Accumulate'
  @GrpcMethod('AppController', 'Accumulate')
  accumulate(numberArray: INumberArray, metadata: any): ISumOfNumberArray {
    this.logger.log('Adding ' + numberArray.data.toString()); // Log something on every call
    return {
      sum: this.mathService.accumulate(numberArray.data),
    };
  }
}
