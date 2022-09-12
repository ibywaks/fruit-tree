import { Controller, Get, Param, Post, Body, Query } from '@nestjs/common';

import { Tree } from './tree.entity';
import { TreeService } from './tree.service';

import { CreateTreeDTO } from './dto/create-tree.dto';

@Controller('trees')
export class TreeController {
  constructor(private readonly treeService: TreeService) {}

  @Get()
  getTrees(@Query() query: { isEndangered?: boolean }): Promise<Tree[]> {
    return this.treeService.findAll({ isEndangered: query.isEndangered });
  }

  @Get('/:id')
  getSingleTree(@Param() params: { id: number }): Promise<Tree> {
    return this.treeService.findOne(params.id);
  }

  @Post()
  createTree(@Body() body: CreateTreeDTO): Promise<Tree> {
    return this.treeService.create(body);
  }
}
