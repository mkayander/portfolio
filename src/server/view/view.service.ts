import { Injectable, OnModuleInit } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import createServer from "next";
import { NextServer } from "next/dist/server/next";
import { Request, Response } from "express";

@Injectable()
export class ViewService implements OnModuleInit {
    private server: NextServer | undefined;

    constructor(private readonly configService: ConfigService) {}

    async onModuleInit(): Promise<void> {
        try {
            this.server = createServer({
                dev: this.configService.get<string>("NODE_ENV") !== "production",
                dir: "./src/client",
            });
            await this.server.prepare();
        } catch (error) {
            console.error(error);
        }
    }

    handler(req: Request, res: Response) {
        return this.server?.getRequestHandler()(req, res);
    }
}
