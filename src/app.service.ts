import { Injectable } from '@nestjs/common';
import * as QRCode from 'qrcode';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async generate({ url }: { url: string }): Promise<string> {
    return await QRCode.toDataURL(url, { scale: 10 });
  }
}
