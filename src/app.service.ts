import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  generate({ url }: { url: string }): string {
    return url;
  }
}
