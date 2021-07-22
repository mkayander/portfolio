import { Controller, Get, Req } from "@nestjs/common";
import { AppService } from "./app.service";
import { Request } from "express";

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get("/hello-world")
    getHello(): string {
        return this.appService.getHello();
    }

    @Get("/test")
    getTest(@Req() request: Request): string {
        return `Request data: ${request} ${request.cookies} ${request.query}`;
    }
}
