// noinspection JSIgnoredPromiseFromCall

import { NestFactory } from "@nestjs/core";
import { NestExpressApplication } from "@nestjs/platform-express";
import { ServerModule } from "./server.module";
import { GlobalExceptionFilter } from "./app/filters/global-exception.filter";

async function bootstrap() {
    const app = await NestFactory.create<NestExpressApplication>(ServerModule);
    app.useGlobalFilters(new GlobalExceptionFilter());
    await app.listen(3000);
}

bootstrap();
