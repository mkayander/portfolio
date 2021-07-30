import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { jwtConstants } from "./constants";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { User } from "../users/entities/user.entity";
import { AuthService } from "./auth.service";

export type JwtPayload = {
    id: number;
    roles: User["roles"];
    email: string;
    iat: number;
    exp: number;
};

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly authService: AuthService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: jwtConstants.secret,
        });
    }

    async validate(payload: JwtPayload) {
        console.log("JwtStrategy payload: ", payload);

        const user = await this.authService.validateUserJwt(payload);
        if (!user) {
            throw new UnauthorizedException();
        }

        return user;
    }
}
