import { Injectable } from "@nestjs/common";
import { UsersService } from "../users/users.service";
import * as bcrypt from "bcrypt";
import { JwtService } from "@nestjs/jwt";
import { JwtPayload } from "./jwt.strategy";
import { ShowUserDto } from "../users/dto/show-user.dto";

@Injectable()
export class AuthService {
    constructor(private readonly usersService: UsersService, private readonly jwtService: JwtService) {}

    async validateUser(email: string, pwd: string): Promise<ShowUserDto | null> {
        const user = await this.usersService.findByEmail(email);
        if (user && (await bcrypt.compare(pwd, user.passwordHash))) {
            return this.usersService.toDto(user);
        }

        return null;
    }

    async validateUserJwt(payload: JwtPayload): Promise<ShowUserDto | null> {
        const user = await this.usersService.findOne(payload.id);
        if (user) {
            return this.usersService.toDto(user);
        }

        return null;
    }

    async login(user: any) {
        if (user === undefined) return null;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { passwordRaw, passwordHash, ...rest } = user;
        return {
            access_token: this.jwtService.sign(rest),
        };
    }
}
