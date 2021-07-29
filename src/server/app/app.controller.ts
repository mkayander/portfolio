import { Controller, Get, Post, Req, UseGuards } from "@nestjs/common";
import { AppService } from "./app.service";
import { LocalAuthGuard } from "../auth/local-auth.guard";
import { Request } from "express";

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @UseGuards(LocalAuthGuard)
    @Post("auth/login")
    async login(@Req() req: Request) {
        console.log("Login: ", req.user);
        return req.user;
    }

    @Get("/hello-world")
    getHello(): string {
        return this.appService.getHello();
    }

    @Get("/test")
    getTest(@Req() request: Request): string {
        return `Request data: ${request} ${request.cookies} ${request.query}`;
    }
}
