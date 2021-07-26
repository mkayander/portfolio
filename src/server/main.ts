// noinspection JSIgnoredPromiseFromCall

import { NestFactory } from "@nestjs/core";
import { NestExpressApplication } from "@nestjs/platform-express";
import { ServerModule } from "./server.module";
import { MongoExceptionFilter } from "./app/filters/mongo-exception.filter";

async function bootstrap() {
    const app = await NestFactory.create<NestExpressApplication>(ServerModule);
    app.useGlobalFilters(new MongoExceptionFilter());
    await app.listen(3000);
}

bootstrap();
