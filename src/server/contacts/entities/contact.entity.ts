import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Contact extends BaseEntity {
    // @ObjectIdColumn()
    // id: ObjectID;

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "enum", enum: ["mobile", "email", "url"] })
    type: "mobile" | "email" | "url";

    @Column()
    iconUrl: string;

    @Column({ unique: true })
    title: string;

    @Column({ unique: true })
    value: string;
}
