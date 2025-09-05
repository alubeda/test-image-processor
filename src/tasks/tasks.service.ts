import { Injectable } from '@nestjs/common'
import { CreateTaskDto } from './dto/create-task.dto'

@Injectable()
export class TasksService {
    create(createTaskDto: CreateTaskDto) {
        return 'This action adds a new task'
    }

    findOne(id: number) {
        return `This action returns a #${id} task`
    }
}
