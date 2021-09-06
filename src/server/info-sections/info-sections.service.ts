import { Injectable } from "@nestjs/common";
import { CreateInfoSectionDto } from "./dto/create-info-section.dto";
import { UpdateInfoSectionDto } from "./dto/update-info-section.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { InfoSection } from "./entities/info-section.entity";
import { Repository } from "typeorm";

@Injectable()
export class InfoSectionsService {
    constructor(@InjectRepository(InfoSection) private readonly repository: Repository<InfoSection>) {}

    create(createInfoSectionDto: CreateInfoSectionDto) {
        return this.repository.insert(createInfoSectionDto).then(result => result.raw);
    }

    findAll() {
        return this.repository.find();
    }

    findOne(id: number) {
        return this.repository.findOneOrFail(id);
    }

    update(id: number, updateInfoSectionDto: UpdateInfoSectionDto) {
        return this.repository.update(id, updateInfoSectionDto);
    }

    remove(id: number) {
        return this.repository.findOneOrFail(id).then(item => this.repository.remove(item));
    }
}
