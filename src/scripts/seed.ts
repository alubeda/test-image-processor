import 'dotenv/config'
import * as mongoose from 'mongoose'
import { Task, TaskSchema } from '../tasks/entities/task.entity'

async function bootstrap() {
    const uri = process.env.MONGODB_URI
    if (!uri) {
        throw new Error('MONGODB_URI not found in environment variables.')
    }

    try {
        const { connection } = await mongoose.connect(uri)
        const TaskModel = mongoose.model(Task.name, TaskSchema)

        console.log('Clearing database...')
        await connection.db!.dropDatabase()

        console.log('Seeding tasks...')
        await TaskModel.create([
            {
                originalPath: 'https://example.com/image1.jpg',
                status: 'pending',
                price: 25.5,
            },
            {
                originalPath: 'https://example.com/image2.jpg',
                status: 'completed',
                price: 30.0,
                images: [
                    {
                        resolution: 1024,
                        path: '/output/image1/1024/f322b730b287da77e1c519c7ffef4fc2.jpg',
                    },
                    {
                        resolution: 800,
                        path: '/output/image1/800/202fd8b3174a774bac24428e8cb230a1.jpg',
                    },
                ],
            },
        ])

        console.log('Database seeded successfully!')
    } catch (error) {
        console.error('Failed to seed the database:', error)
    } finally {
        await mongoose.disconnect()
    }
}

bootstrap()
