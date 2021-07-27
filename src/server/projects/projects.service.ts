import { Injectable } from "@nestjs/common";
import { CreateProjectDto } from "./dto/create-project.dto";
import { UpdateProjectDto } from "./dto/update-project.dto";
import { Repository } from "typeorm";
import { Project } from "./entities/project.entity";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class ProjectsService {
    constructor(@InjectRepository(Project) private readonly repository: Repository<Project>) {}

    async create(createProjectDto: CreateProjectDto) {
        return this.repository.findOne((await this.repository.insert(createProjectDto)).identifiers[0].id);
    }

    findAll() {
        return this.repository.find();
    }

    findOne(id: number) {
        return this.repository.findOne(id);
    }

    update(id: number, updateProjectDto: UpdateProjectDto) {
        return this.repository.update(id, updateProjectDto);
    }

    async remove(id: number) {
        return this.repository.remove(await this.repository.findOne(id));
    }
}
