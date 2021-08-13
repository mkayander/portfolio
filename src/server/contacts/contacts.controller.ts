import { Body, Controller, Delete, Get, Param, Patch, Post, UploadedFile, UseInterceptors } from "@nestjs/common";
import { ContactsService } from "./contacts.service";
import { CreateContactDto } from "./dto/create-contact.dto";
import { UpdateContactDto } from "./dto/update-contact.dto";
import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage } from "multer";
import { editFileName } from "../projects/file-uploading.utils";

@Controller("contacts")
export class ContactsController {
    constructor(private readonly contactsService: ContactsService) {}

    @Post()
    create(@Body() createContactDto: CreateContactDto) {
        return this.contactsService.create(createContactDto);
    }

    @Post(":id/icon")
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

        return this.update(id, { iconUrl: `/static/icons/${file.filename}` });
    }

    @Get()
    findAll() {
        return this.contactsService.findAll();
    }

    @Get(":id")
    findOne(@Param("id") id: string) {
        return this.contactsService.findOne(+id);
    }

    @Patch(":id")
    update(@Param("id") id: string, @Body() updateContactDto: UpdateContactDto) {
        return this.contactsService.update(+id, updateContactDto);
    }

    @Delete(":id")
    remove(@Param("id") id: string) {
        return this.contactsService.remove(+id);
    }
}
