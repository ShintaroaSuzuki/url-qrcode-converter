import {
  Controller,
  Get,
  Post,
  HttpException,
  HttpStatus,
  Body,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  async generate(
    @Body()
    { url }: { url: string },
  ): Promise<string> {
    if (!url)
      throw new HttpException(
        'パラメータが不足しています',
        HttpStatus.BAD_REQUEST,
      );
    try {
      return await this.appService.generate({ url });
    } catch (e) {
      throw new HttpException(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
