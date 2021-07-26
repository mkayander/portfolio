import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Project {
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

    @Column({ array: true, nullable: true })
    githubUrls: string[];
}
