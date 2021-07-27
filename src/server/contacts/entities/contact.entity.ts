import { Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";

@Entity()
export class Contact {
    @ObjectIdColumn()
    id: ObjectID;

    @Column({ type: "enum", enum: ["mobile", "email", "url"] })
    type: "mobile" | "email" | "url";

    @Column()
    iconUrl: string;

    @Column({ unique: true })
    title: string;

    @Column({ unique: true })
    value: string;
}
