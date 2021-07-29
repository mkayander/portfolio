import { Injectable } from "@nestjs/common";
import { UsersService } from "../users/users.service";
import * as bcrypt from "bcrypt";
import { JwtService } from "@nestjs/jwt";

export type JwtAuthPayload = {
    id: number;
    email: string;
};

@Injectable()
export class AuthService {
    constructor(private readonly usersService: UsersService, private readonly jwtService: JwtService) {}

    async validateUser(email: string, pwd: string): Promise<any> {
        const user = await this.usersService.findByEmail(email);
        if (user && (await bcrypt.compare(pwd, user.passwordHash))) {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const { passwordRaw, passwordHash, ...result } = user;
            return result;
        }

        return null;
    }

    async login(user: any) {
        const payload: JwtAuthPayload = { email: user.email, id: user.id };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}
