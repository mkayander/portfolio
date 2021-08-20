import { Controller, Get, Post, Req, StreamableFile, UseGuards } from "@nestjs/common";
import { AppService } from "./app.service";
import { LocalAuthGuard } from "../auth/local-auth.guard";
import { Request } from "express";
import { AuthService } from "../auth/auth.service";
import { createReadStream } from "fs";
import { join } from "path";

@Controller()
export class AppController {
    constructor(private readonly appService: AppService, private readonly authService: AuthService) {}

    @UseGuards(LocalAuthGuard)
    @Post("auth/login")
    async login(@Req() req: Request) {
        console.log("Login: ", req.user);
        return this.authService.login(req.user);
    }

    @Get("portfolio.txt")
    getFile(): StreamableFile {
        const file = createReadStream(join(process.cwd(), "package.json"));
        return new StreamableFile(file);
    }
}
