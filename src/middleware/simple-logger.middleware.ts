import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class SimpleLoggerMiddleware implements NestMiddleware {
  use(res: Request, req: Response, next: NextFunction) {
    // do some tasks
    console.log('Executing request!');
    next();
  }
}
