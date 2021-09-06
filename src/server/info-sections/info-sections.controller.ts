import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from "@nestjs/common";
import { InfoSectionsService } from "./info-sections.service";
import { CreateInfoSectionDto } from "./dto/create-info-section.dto";
import { UpdateInfoSectionDto } from "./dto/update-info-section.dto";
import { JwtOptionalAuthGuard } from "../auth/jwt-optional-auth.guard";
import { User } from "../users/user.decorator";
import { ShowUserDto } from "../users/dto/show-user.dto";
import { filterActiveRecords } from "../users/user.utils";
import { sortItemsByIndex } from "../app/app.utils.";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";

@Controller("info-sections")
export class InfoSectionsController {
    constructor(private readonly infoSectionsService: InfoSectionsService) {}

    @Post()
    @UseGuards(JwtAuthGuard)
    create(@Body() createInfoSectionDto: CreateInfoSectionDto) {
        return this.infoSectionsService.create(createInfoSectionDto);
    }

    @Get()
    @UseGuards(JwtOptionalAuthGuard)
    findAll(@User() user?: ShowUserDto) {
        const data = this.infoSectionsService.findAll();
        return filterActiveRecords(user, sortItemsByIndex(data));
    }

    @Get(":id")
    @UseGuards(JwtAuthGuard)
    findOne(@Param("id") id: string) {
        return this.infoSectionsService.findOne(+id);
    }

    @Patch(":id")
    @UseGuards(JwtAuthGuard)
    update(@Param("id") id: string, @Body() updateInfoSectionDto: UpdateInfoSectionDto) {
        return this.infoSectionsService.update(+id, updateInfoSectionDto);
    }

    @Delete(":id")
    @UseGuards(JwtAuthGuard)
    remove(@Param("id") id: string) {
        return this.infoSectionsService.remove(+id);
    }
}
