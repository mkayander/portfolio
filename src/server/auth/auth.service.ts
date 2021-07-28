import { Injectable } from "@nestjs/common";
import { UsersService } from "../users/users.service";
import * as bcrypt from "bcrypt";

@Injectable()
export class AuthService {
    constructor(private usersService: UsersService) {}

    async validateUser(email: string, pwd: string): Promise<any> {
        const user = await this.usersService.findByEmail(email);
        if (user && (await bcrypt.compare(pwd, user.passwordHash))) {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const { passwordRaw, passwordHash, ...result } = user;
            return result;
        }

        return null;
    }
}
