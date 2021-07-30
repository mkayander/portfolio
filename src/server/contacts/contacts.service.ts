import { Injectable } from "@nestjs/common";
import { CreateContactDto } from "./dto/create-contact.dto";
import { UpdateContactDto } from "./dto/update-contact.dto";
import { Repository } from "typeorm";
import { Contact } from "./entities/contact.entity";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class ContactsService {
    constructor(@InjectRepository(Contact) private readonly repository: Repository<Contact>) {}

    async create(createContactDto: CreateContactDto) {
        return this.repository.findOne((await this.repository.insert(createContactDto)).identifiers[0].id);
    }

    findAll() {
        return this.repository.find();
    }

    findOne(id: number) {
        return this.repository.findOne(id);
    }

    update(id: number, updateContactDto: UpdateContactDto) {
        return this.repository.update(id, updateContactDto);
    }

    async remove(id: number) {
        return this.repository.remove(await this.repository.findOneOrFail(id));
    }
}
