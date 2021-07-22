import { Module } from "@nestjs/common";
import { ViewService } from "./view.service";
import { ViewController } from "./view.controller";
import { ConfigModule } from "@nestjs/config";

@Module({
    imports: [ConfigModule],
    providers: [ViewService],
    controllers: [ViewController],
})
export class ViewModule {}
