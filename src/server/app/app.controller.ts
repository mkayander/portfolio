import { Controller, Get, Post, Req, UseGuards } from "@nestjs/common";
import { AppService } from "./app.service";
import { LocalAuthGuard } from "../auth/local-auth.guard";
import { Request } from "express";
import { AuthService } from "../auth/auth.service";

@Controller()
export class AppController {
    constructor(private readonly appService: AppService, private readonly authService: AuthService) {}

    @UseGuards(LocalAuthGuard)
    @Post("auth/login")
    async login(@Req() req: Request) {
        console.log("Login: ", req.user);
        return this.authService.login(req.user);
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
