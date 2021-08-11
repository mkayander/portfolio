import { Controller, Get, Param, Res } from "@nestjs/common";
import { Response } from "express";

@Controller()
export class StaticController {
    @Get("static/:imageName")
    seeUploadedFile(@Param("imageName") filename: string, @Res() res: Response) {
        return res.sendFile(filename, { root: "./static" });
    }
}
