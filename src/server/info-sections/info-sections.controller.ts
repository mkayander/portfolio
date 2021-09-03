import { Controller, Get, Post, Body, Patch, Param, Delete } from "@nestjs/common";
import { InfoSectionsService } from "./info-sections.service";
import { CreateInfoSectionDto } from "./dto/create-info-section.dto";
import { UpdateInfoSectionDto } from "./dto/update-info-section.dto";

@Controller("info-sections")
export class InfoSectionsController {
    constructor(private readonly infoSectionsService: InfoSectionsService) {}

    @Post()
    create(@Body() createInfoSectionDto: CreateInfoSectionDto) {
        return this.infoSectionsService.create(createInfoSectionDto);
    }

    @Get()
    findAll() {
        return this.infoSectionsService.findAll();
    }

    @Get(":id")
    findOne(@Param("id") id: string) {
        return this.infoSectionsService.findOne(+id);
    }

    @Patch(":id")
    update(@Param("id") id: string, @Body() updateInfoSectionDto: UpdateInfoSectionDto) {
        return this.infoSectionsService.update(+id, updateInfoSectionDto);
    }

    @Delete(":id")
    remove(@Param("id") id: string) {
        return this.infoSectionsService.remove(+id);
    }
}
