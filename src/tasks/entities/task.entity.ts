import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { TaskStatus } from '../enums/task-status.enum'
import { Image } from './image.entity'

@Schema({
    timestamps: true,
})
export class Task {
    @Prop({
        required: true,
        type: String,
        enum: TaskStatus,
        default: TaskStatus.PENDING,
    })
    status: TaskStatus

    @Prop({ required: true })
    price: number

    @Prop({ required: true })
    originalPath: string

    @Prop({ type: [Image] })
    images: Image[]
}

export const TaskSchema = SchemaFactory.createForClass(Task)
