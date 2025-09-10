import { ConfigService } from '@nestjs/config'
import { BullModuleOptions } from '@nestjs/bull'

export const getBullConfig = (
    configService: ConfigService,
): BullModuleOptions => {
    const redisHost = configService.get('REDIS_HOST')
    const redisPort = configService.get('REDIS_PORT')
    const redisTimeout = configService.get('REDIS_TIMEOUT')

    return {
        redis: {
            host: redisHost || 'localhost',
            port: parseInt(redisPort) || 6379,
            connectTimeout: parseInt(redisTimeout) || 10000,
            maxRetriesPerRequest: 3,
            retryStrategy(times) {
                return times < 3 ? times * 500 : null
            },
        },
    }
}
