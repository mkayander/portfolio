import { MigrationInterface, QueryRunner } from "typeorm";

export class MakeIconUrlNullable1627458845478 implements MigrationInterface {
    name = "MakeIconUrlNullable1627458845478";

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `contact` CHANGE `iconUrl` `iconUrl` varchar(255) NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `contact` CHANGE `iconUrl` `iconUrl` varchar(255) NOT NULL");
    }
}
