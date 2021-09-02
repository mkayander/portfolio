// noinspection JSIgnoredPromiseFromCall

import { NestFactory } from "@nestjs/core";
import { NestExpressApplication } from "@nestjs/platform-express";
import { ServerModule } from "./server.module";

async function bootstrap() {
    const app = await NestFactory.create<NestExpressApplication>(ServerModule);
    // app.useGlobalFilters(new GlobalExceptionFilter());
    // app.use("/static", express.static(join(__dirname, "..", "..", "static")));
    // app.useStaticAssets(join(__dirname, "..", "..", "static"));
    if (process.env.NODE_ENV !== "production") {
        app.useStaticAssets("public");
        app.useStaticAssets("media", { prefix: "/media" });
    }
    await app.listen(3000);
}

bootstrap();
