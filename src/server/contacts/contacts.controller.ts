import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    UploadedFile,
    UseGuards,
    UseInterceptors,
} from "@nestjs/common";
import { ContactsService } from "./contacts.service";
import { CreateContactDto } from "./dto/create-contact.dto";
import { UpdateContactDto } from "./dto/update-contact.dto";
import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage } from "multer";
import { editFileName } from "../utils/file-uploading.utils";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { JwtOptionalAuthGuard } from "../auth/jwt-optional-auth.guard";
import { User } from "../users/user.decorator";
import { ShowUserDto } from "../users/dto/show-user.dto";
import { Role } from "../users/role.enum";

@Controller("contacts")
export class ContactsController {
    constructor(private readonly contactsService: ContactsService) {}

    @Post()
    @UseGuards(JwtAuthGuard)
    create(@Body() createContactDto: CreateContactDto) {
        return this.contactsService.create(createContactDto);
    }

    @Post(":id/icon")
    @UseGuards(JwtAuthGuard)
    @UseInterceptors(
        FileInterceptor("image", {
            storage: diskStorage({
                destination: "./media/icons",
                filename: editFileName,
            }),
        })
    )
    uploadIcon(@Param("id") id: string, @UploadedFile() file: Express.Multer.File) {
        console.log(id, file);

        return this.update(id, { iconUrl: `/media/icons/${file.filename}` });
    }

    @Get()
    @UseGuards(JwtOptionalAuthGuard)
    findAll(@User() user?: ShowUserDto) {
        console.log(user, user?.roles.includes(Role.Admin));
        return this.contactsService
            .findAll()
            .then(contacts => contacts.sort((a, b) => a.index - b.index))
            .then(contacts => (user?.roles.includes(Role.Admin) ? contacts : contacts.filter(value => value.isActive)));
    }

    @Get(":id")
    findOne(@Param("id") id: string) {
        return this.contactsService.findOne(+id);
    }

    @Patch(":id")
    @UseGuards(JwtAuthGuard)
    update(@Param("id") id: string, @Body() updateContactDto: UpdateContactDto) {
        return this.contactsService.update(+id, updateContactDto);
    }

    @Delete(":id")
    @UseGuards(JwtAuthGuard)
    remove(@Param("id") id: string) {
        return this.contactsService.remove(+id);
    }
}
