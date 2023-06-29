import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { InMemoryDBService } from '@nestjs-addons/in-memory-db';
import { TaskEntity } from './entities/task';

@Controller('task')
export class TaskController {
    constructor(private taskService: InMemoryDBService<TaskEntity>) {}


    @Get()
    getProducts() {
      return this.taskService.getAll();
    }
  
    @Post()
    AddProduct(@Body() task: TaskEntity) {
      return this.taskService.create(task);
    }
  
    @Put()
    EditProduct(@Body() task: TaskEntity) {
      return this.taskService.update(task);
    }
  
   @Delete(':id')
    DeleteProduct(@Param('id') id: string) {
      return this.taskService.delete(id)
    }
  
    @Get(':id')
    GetProductById(@Param('id') id: string) {
      return this.taskService.query(data => data.id === id)
    }

}