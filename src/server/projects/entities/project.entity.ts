import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Project {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true, nullable: false })
    title: string;

    @Column({ nullable: true })
    subtitle: string;

    @Column({ unique: true, nullable: true })
    url: string;

    @Column({ nullable: false })
    year: number;

    @Column("text", { nullable: true })
    description: string;

    @Column("linestring", { array: true, nullable: true })
    githubUrls: string[];
}
