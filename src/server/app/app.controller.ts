import {
    Controller,
    Get,
    InternalServerErrorException,
    Post,
    Req,
    Res,
    UploadedFile,
    UseGuards,
    UseInterceptors,
} from "@nestjs/common";
import { AppService } from "./app.service";
import { LocalAuthGuard } from "../auth/local-auth.guard";
import { Request, Response } from "express";
import { AuthService } from "../auth/auth.service";
import * as fs from "fs";
import { join } from "path";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage } from "multer";
import { genericFileFilter } from "../utils/file-uploading.utils";

@Controller()
export class AppController {
    constructor(private readonly appService: AppService, private readonly authService: AuthService) {}

    @UseGuards(LocalAuthGuard)
    @Post("auth/login")
    async login(@Req() req: Request) {
        console.log("Login: ", req.user);
        return this.authService.login(req.user);
    }

    @Get("cv")
    getCVRelativeUrl() {
        const dir = join(process.cwd(), "media", "cv");
        try {
            const { file } = fs
                .readdirSync(dir)
                .filter(file => fs.lstatSync(join(dir, file)).isFile())
                .map(file => ({ file, mtime: fs.lstatSync(join(dir, file)).mtime }))
                .reduce((accumulator, currentValue) => {
                    if (currentValue.mtime.getTime() > accumulator.mtime.getTime()) {
                        return currentValue;
                    }
                    return accumulator;
                });

            return { relativeUrl: `/media/cv/${file}` };
        } catch (e) {
            throw new InternalServerErrorException("CV file is currently not available.");
        }
    }

    @Post("cv")
    @UseGuards(JwtAuthGuard)
    @UseInterceptors(
        FileInterceptor("file", {
            storage: diskStorage({
                destination: "./media/cv",
                filename: (_req, _file, callback) => callback(null, "Max_Kayander_CV.pdf"),
            }),
            fileFilter: genericFileFilter(/^.*\.(pdf|PDF)$/),
        })
    )
    postFile(@Res() res: Response, @UploadedFile() file: Express.Multer.File) {
        return res.status(200).send({ path: file.path });
    }
}
