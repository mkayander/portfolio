import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { Repository } from "typeorm";
import { User } from "./entities/user.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { ShowUserDto } from "./dto/show-user.dto";

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private readonly repository: Repository<User>) {}

    async create(createUserDto: CreateUserDto) {
        return (await this.repository.insert(createUserDto)).raw;
    }

    findAll() {
        return this.repository.find();
    }

    findOne(id: number) {
        return this.repository.findOneOrFail(id);
    }

    findByEmail(email: string) {
        return this.repository.findOne({ email });
    }

    update(id: number, updateUserDto: UpdateUserDto) {
        return this.repository.update(id, updateUserDto);
    }

    async remove(id: number) {
        return this.repository.remove(await this.repository.findOneOrFail(id));
    }

    toDto(user: User): ShowUserDto {
        return { id: user.id, email: user.email, roles: user.roles };
    }
}
