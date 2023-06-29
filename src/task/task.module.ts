import { Module } from '@nestjs/common';
import { InMemoryDBModule } from '@nestjs-addons/in-memory-db';
import { TaskController } from './task.controller';

@Module({
  imports: [InMemoryDBModule.forFeature('task')],
  controllers: [TaskController]
})
export class TaskModule {}
