import { WinstonModuleOptions } from 'nest-winston'
import * as winston from 'winston'
import * as path from 'path'
import { ConfigService } from '@nestjs/config'

export const getWinstonConfig = (
    configService: ConfigService,
): WinstonModuleOptions => {
    const logDir = configService.get<string>('LOGS_DIR', 'logs')
    const logPath = path.join(process.cwd(), logDir)

    return {
        format: winston.format.combine(
            winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
            winston.format.json(),
        ),
        transports: [
            new winston.transports.Console({ format: winston.format.json() }),
            new winston.transports.File({
                dirname: logPath,
                filename: 'app.log',
                level: 'info',
            }),
            new winston.transports.File({
                dirname: logPath,
                filename: 'error.log',
                level: 'error',
            }),
        ],
    }
}
