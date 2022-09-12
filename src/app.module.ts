import { TypeOrmModule } from '@nestjs/typeorm';

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TreeModule } from './tree/tree.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'MoradoLuv',
      database: 'fruit-tree',
      entities: [],
      synchronize: true,
    }),
    TreeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
