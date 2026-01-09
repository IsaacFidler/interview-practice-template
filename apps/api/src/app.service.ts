import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHealth() {
    return {
      status: 'healthy',
      timestamp: new Date().toISOString(),
    };
  }

  getHello() {
    return {
      message: 'Hello from Nest.js API!',
    };
  }
}
