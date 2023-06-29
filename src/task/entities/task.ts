import { InMemoryDBEntity } from '@nestjs-addons/in-memory-db';

export interface TaskEntity extends InMemoryDBEntity {
    taskTitle: string;
    taskDescription: string;
    taskStartDate: string;
    taskEndDate: string;
}