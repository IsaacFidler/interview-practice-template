import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('health', () => {
    it('should return health status', () => {
      const result = appController.getHealth();
      expect(result.status).toBe('healthy');
      expect(result.timestamp).toBeDefined();
    });
  });

  describe('hello', () => {
    it('should return hello message', () => {
      expect(appController.getHello()).toEqual({
        message: 'Hello from Nest.js API!',
      });
    });
  });
});
