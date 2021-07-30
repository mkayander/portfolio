import { MigrationInterface, QueryRunner } from "typeorm";

export class AddPasswordRawColumn1627504546756 implements MigrationInterface {
    name = "AddPasswordRawColumn1627504546756";

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` ADD `passwordRaw` varchar(255) NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `passwordRaw`");
    }
}
