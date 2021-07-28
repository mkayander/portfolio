import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Project extends BaseEntity {
    // @ObjectIdColumn()
    // id: ObjectID;

    @PrimaryGeneratedColumn()
    id: number;

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

    // @Column({ array: true, nullable: true })
    // githubUrls: string[];
}
