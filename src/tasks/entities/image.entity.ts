import { Prop } from '@nestjs/mongoose'

export class Image {
    @Prop({ required: true })
    resolution: number

    @Prop({ required: true })
    path: string
}
