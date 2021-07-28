import { Injectable } from "@nestjs/common";
import { CreateProjectDto } from "./dto/create-project.dto";
import { UpdateProjectDto } from "./dto/update-project.dto";
import { Model } from "mongoose";
import { Project, ProjectDocument } from "./schemas/project.schema";
import { InjectModel } from "@nestjs/mongoose";

@Injectable()
export class ProjectsService {
    constructor(@InjectModel(Project.name) private readonly projectModel: Model<ProjectDocument>) {}

    async create(createProjectDto: CreateProjectDto) {
        return new this.projectModel(createProjectDto);
    }

    findAll() {
        return this.projectModel.find().exec();
    }

    findOne(id: string) {
        return this.projectModel.findById(id).exec();
    }

    update(id: string, updateProjectDto: UpdateProjectDto) {
        return this.projectModel.findByIdAndUpdate(id, updateProjectDto).exec();
    }

    async remove(id: string) {
        return this.projectModel.findByIdAndRemove(id).exec();
    }
}
