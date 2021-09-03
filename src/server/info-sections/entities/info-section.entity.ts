import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class InfoSection {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 2 })
    emoji: string;

    @Column({ length: 32 })
    title: string;

    @Column()
    content: string;
}
