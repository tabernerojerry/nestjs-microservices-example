import { Controller, Get, Logger, Post, Body } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { MathService } from './math.service';
import { Observable } from 'rxjs';

@Controller()
export class AppController {
  // Create a logger instance
  private logger =  new Logger('AppController');

  constructor(private readonly mathService: MathService) {}

  // Define the message pattern for this method
  @MessagePattern('add')
  async accumulate(data: number[]): Promise<number> {
    this.logger.log('Adding ' + data.toString()); // Log something on every call
    return this.mathService.accumulate(data);
  }
}
