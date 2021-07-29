import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from "@nestjs/common";
import { ProjectsService } from "./projects.service";
import { CreateProjectDto } from "./dto/create-project.dto";
import { UpdateProjectDto } from "./dto/update-project.dto";
import { Roles } from "../users/roles.decorator";
import { Role } from "../users/role.enum";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";

@Controller("projects")
export class ProjectsController {
    constructor(private readonly projectsService: ProjectsService) {}

    @Post()
    @UseGuards(JwtAuthGuard)
    // @Roles(Role.Admin)
    create(@Body() createProjectDto: CreateProjectDto) {
        return this.projectsService.create(createProjectDto);
    }

    @Get()
    findAll() {
        return this.projectsService.findAll();
    }

    @Get(":id")
    findOne(@Param("id") id: string) {
        return this.projectsService.findOne(id);
    }

    @Roles(Role.Admin)
    @Patch(":id")
    update(@Param("id") id: string, @Body() updateProjectDto: UpdateProjectDto) {
        return this.projectsService.update(id, updateProjectDto);
    }

    @Roles(Role.Admin)
    @Delete(":id")
    remove(@Param("id") id: string) {
        return this.projectsService.remove(id);
    }
}
