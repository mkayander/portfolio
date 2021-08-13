import { User } from "../entities/user.entity";

export type ShowUserDto = Pick<User, "id" | "email" | "roles">;
