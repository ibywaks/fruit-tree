import { TypeOrmModule } from '@nestjs/typeorm';
import cors from 'cors';
import helmet from 'helmet';

import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TreeModule } from './tree/tree.module';
import { Tree } from './tree/tree.entity';
import { simpleFunc } from './middleware';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'xxxx',
      database: 'fruit-tree',
      entities: [Tree],
      synchronize: true,
    }),
    TreeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(simpleFunc, cors(), helmet()).forRoutes('*');
  }
}
