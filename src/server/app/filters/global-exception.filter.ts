import { ArgumentsHost, Catch, ExceptionFilter, HttpStatus } from "@nestjs/common";
import { Request, Response } from "express";

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
    catch(exception: Error, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const request = ctx.getRequest<Request>();
        const response = ctx.getResponse<Response>();
        const message = exception.message;
        let status = HttpStatus.INTERNAL_SERVER_ERROR;

        switch (exception.name) {
            case "MongoError":
                console.log("Catch mongo");
                status = HttpStatus.BAD_REQUEST;
        }

        response.status(status).json({
            statusCode: status,
            timestamp: new Date().toISOString(),
            message: message,
            path: request.url,
        });
    }
}
