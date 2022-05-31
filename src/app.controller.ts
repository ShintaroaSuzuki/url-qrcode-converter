import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Query,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  generate(
    @Query('url')
    url: string,
  ): string {
    if (!url)
      throw new HttpException(
        'パラメータが不足しています',
        HttpStatus.BAD_REQUEST,
      );
    return this.appService.generate({ url });
  }
}
