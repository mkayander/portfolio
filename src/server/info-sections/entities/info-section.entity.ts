import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class InfoSection extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 2 })
    emoji: string;

    @Column({ length: 32 })
    title: string;

    @Column({ type: "text" })
    content: string;
}
