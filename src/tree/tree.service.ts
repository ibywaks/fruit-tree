import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTreeDTO } from './dto/create-tree.dto';
import { TreeFilterOptions } from './interfaces/filters';
import { Tree } from './tree.entity';

@Injectable()
export class TreeService {
  constructor(
    @InjectRepository(Tree)
    private treeRepository: Repository<Tree>,
  ) {}

  findAll(filters: TreeFilterOptions): Promise<Tree[]> {
    return this.treeRepository.find({
      where: {
        isEndangered: filters.isEndangered,
      },
    });
  }

  findOne(id: number): Promise<Tree> {
    return this.treeRepository.findOneBy({ id });
  }

  create(payload: CreateTreeDTO): Promise<Tree> {
    return this.treeRepository.save(payload);
  }

  async deleteById(id: number): Promise<void> {
    await this.treeRepository.delete(id);
  }
}
