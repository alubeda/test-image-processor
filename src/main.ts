import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { AllExceptionsFilter } from './common/filters/all-exceptions.filter'
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston'
import { ValidationPipe } from '@nestjs/common'

async function bootstrap() {
    const app = await NestFactory.create(AppModule)
    app.useLogger(app.get(WINSTON_MODULE_NEST_PROVIDER))
    app.useGlobalFilters(new AllExceptionsFilter())

    app.useGlobalPipes(
        new ValidationPipe({
            whitelist: true,
        }),
    )

    await app.listen(process.env.PORT ?? 3000)
}
bootstrap()
