import { Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";

@Entity()
export class Project {
    @ObjectIdColumn()
    id: ObjectID;

    @Column({ unique: true })
    title: string;

    @Column()
    subtitle?: string;

    @Column({ unique: true })
    url?: string;

    @Column()
    year: number;

    @Column("text")
    description?: string;

    @Column({ array: true, nullable: true })
    githubUrls: string[];
}
