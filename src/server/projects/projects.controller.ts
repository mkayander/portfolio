import {
    BadRequestException,
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    Req,
    UploadedFile,
    UseGuards,
    UseInterceptors,
} from "@nestjs/common";
import { ProjectsService } from "./projects.service";
import { CreateProjectDto } from "./dto/create-project.dto";
import { UpdateProjectDto } from "./dto/update-project.dto";
import { Roles } from "../users/roles.decorator";
import { Role } from "../users/role.enum";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { Request } from "express";
import { RolesGuard } from "../users/roles.guard";
import { FileInterceptor } from "@nestjs/platform-express";
import * as mongoose from "mongoose";
import { diskStorage } from "multer";
import { editFileName } from "./file-uploading.utils";

@Controller("projects")
export class ProjectsController {
    constructor(private readonly projectsService: ProjectsService) {}

    @Post()
    @Roles(Role.Admin)
    @UseGuards(RolesGuard)
    @UseGuards(JwtAuthGuard)
    create(@Body() createProjectDto: CreateProjectDto, @Req() request: Request) {
        console.log("Projects request user: ", request.user);
        return this.projectsService.create(createProjectDto);
    }

    @Post(":id/image")
    @UseInterceptors(
        FileInterceptor("image", {
            storage: diskStorage({
                destination: "./media",
                filename: editFileName,
            }),
        })
    )
    uploadImage(@Param("id") id: string, @UploadedFile() file: Express.Multer.File) {
        console.log(id, file);

        return this.update(id, { imageUrl: `/static/${file.filename}` });
    }

    @Get()
    findAll() {
        return this.projectsService.findAll();
    }

    @Get(":id")
    findOne(@Param("id") id: string) {
        return this.projectsService.findOne(id);
    }

    @Patch(":id")
    @Roles(Role.Admin)
    @UseGuards(RolesGuard)
    @UseGuards(JwtAuthGuard)
    update(@Param("id") id: string, @Body() updateProjectDto: UpdateProjectDto) {
        if (!mongoose.Types.ObjectId.isValid(id)) throw new BadRequestException("Invalid object id!");
        return this.projectsService.update(id, updateProjectDto);
    }

    @Delete(":id")
    @Roles(Role.Admin)
    @UseGuards(RolesGuard)
    @UseGuards(JwtAuthGuard)
    remove(@Param("id") id: string) {
        return this.projectsService.remove(id);
    }
}
