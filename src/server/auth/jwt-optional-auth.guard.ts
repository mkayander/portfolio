import { AuthGuard } from "@nestjs/passport";
import { ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";

@Injectable()
export class JwtOptionalAuthGuard extends AuthGuard("jwt") {
    async canActivate(context: ExecutionContext) {
        try {
            await super.canActivate(context);
        } catch (e) {
            if (!(e instanceof UnauthorizedException)) {
                throw e;
            }
        }
        return true;
    }
}
