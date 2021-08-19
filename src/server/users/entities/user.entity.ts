import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, SaveOptions } from "typeorm";
import { Role } from "../role.enum";
import * as bcrypt from "bcrypt";
import validateEmail from "../../utils/validateEmail";

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "enum", enum: Role, default: Role.User })
    roles: Role[];

    @Column({ unique: true })
    email: string;

    @Column({ type: "varchar", nullable: true })
    passwordRaw: string | null;

    @Column({ default: "" })
    passwordHash: string;

    async save(options?: SaveOptions): Promise<this> {
        if (!validateEmail(this.email)) {
            throw new Error("Email is invalid! - " + this.email);
        }
        if (this.passwordRaw) {
            this.passwordHash = await bcrypt.hash(this.passwordRaw, 10);
            this.passwordRaw = null;
        }
        return super.save(options);
    }
}
