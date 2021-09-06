import { User } from "./entities/user.entity";
import { Role } from "./role.enum";
import { ShowUserDto } from "./dto/show-user.dto";

type ControlledRecord = {
    isActive?: boolean;
};
export const filterActiveRecords = <T extends ControlledRecord>(
    user: User | ShowUserDto | undefined,
    promise: Promise<T[]>,
    permission: Role = Role.Admin
): Promise<T[]> =>
    promise.then(list => (user?.roles.includes(permission) ? list : list.filter(value => value.isActive)));
