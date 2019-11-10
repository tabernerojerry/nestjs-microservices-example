import { Controller, Logger, Post, Body } from '@nestjs/common';
import { MathService } from './math.service';

@Controller()
export class AppController {
  // Create a logger instance
  private logger =  new Logger('AppController');

  constructor(private readonly mathService: MathService) {}

  @Post('add')
  async accumulate(@Body('data') data: number[]) {
    this.logger.log('Adding ' + data.toString()); // Log something on every call
    return this.mathService.accumulate(data);
  }
}
