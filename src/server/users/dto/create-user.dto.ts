import { Role } from "../role.enum";

export class CreateUserDto {
    roles: Role[];

    email: string;

    password: string;
}
