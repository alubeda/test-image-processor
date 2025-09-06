import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { CreateTaskDto } from './dto/create-task.dto'
import { Task } from './entities/task.entity'
import { plainToClass } from 'class-transformer'
import { calculatePrice } from './utils/tasks.utils'

@Injectable()
export class TasksService {
    constructor(
        @InjectModel(Task.name) private readonly taskModel: Model<Task>,
    ) {}

    create(createTaskDto: CreateTaskDto): Promise<Task> {
        const task = plainToClass(Task, createTaskDto)

        task.price = calculatePrice()

        const createdTask = new this.taskModel(task)

        return createdTask.save()
    }

    findOne(id: string): Promise<Task | null> {
        return this.taskModel.findById(id).exec()
    }
}
