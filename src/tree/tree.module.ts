import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TreeController } from './tree.controller';
import { Tree } from './tree.entity';
import { TreeService } from './tree.service';

import { SimpleLoggerMiddleware } from '../middleware';

@Module({
  imports: [TypeOrmModule.forFeature([Tree])],
  providers: [TreeService],
  controllers: [TreeController],
})
export class TreeModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(SimpleLoggerMiddleware).forRoutes('trees');
  }
}
