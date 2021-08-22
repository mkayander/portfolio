import { Request } from "express";
import { extname } from "path";
import { MulterOptions } from "@nestjs/platform-express/multer/interfaces/multer-options.interface";

export type FileFilter = MulterOptions["fileFilter"];
export type EditFilename = (
    req: Request,
    file: Express.Multer.File,
    callback: (error: Error | null, filename: string) => void
) => void;

export const editFileName: EditFilename = (_req, file, callback) => {
    const name = file.originalname.split(".")[0];
    const fileExtName = extname(file.originalname);
    const randomName = Array(4)
        .fill(null)
        .map(() => Math.round(Math.random() * 16).toString(16))
        .join("");
    callback(null, `${name}-${randomName}${fileExtName}`.replace(" ", "_"));
};

export const genericFileFilter =
    (matcher: Parameters<string["match"]>[0]): FileFilter =>
    (req, file, callback) => {
        if (!file.originalname.match(matcher)) {
            return callback(new Error("Wrong file type! Expected to match: " + matcher.toString()), false);
        }
        callback(null, true);
    };
