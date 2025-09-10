import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { WinstonModule } from 'nest-winston'
import { getWinstonConfig } from './config/winston.config'
import { TasksModule } from './tasks/tasks.module'
import { MongooseModule } from '@nestjs/mongoose'
import { getMongooseConfig } from './config/mongoose.config'
import { BullModule } from '@nestjs/bull'
import { getBullConfig } from './config/bull.config'

@Module({
    imports: [
        ConfigModule.forRoot({ isGlobal: true }),
        WinstonModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: getWinstonConfig,
            inject: [ConfigService],
        }),
        MongooseModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: getMongooseConfig,
            inject: [ConfigService],
        }),
        BullModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: getBullConfig,
            inject: [ConfigService],
        }),
        TasksModule,
    ],
})
export class AppModule {}
