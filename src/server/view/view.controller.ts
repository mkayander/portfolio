import { Controller, Get, Req, Res } from "@nestjs/common";
import { Request, Response } from "express";
import { ViewService } from "./view.service";

@Controller("/")
export class ViewController {
    constructor(private readonly viewService: ViewService) {}

    @Get("/")
    public async showHome(@Req() req: Request, @Res() res: Response) {
        await this.viewService.handler(req, res);
    }

    @Get("_next*")
    public async assets(@Req() req: Request, @Res() res: Response) {
        await this.viewService.handler(req, res);
    }

    @Get("/favicon.*")
    public async favicon(@Req() req: Request, @Res() res: Response) {
        await this.viewService.handler(req, res);
    }
}
