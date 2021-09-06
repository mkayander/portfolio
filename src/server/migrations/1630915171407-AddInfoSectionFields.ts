import { MigrationInterface, QueryRunner } from "typeorm";

export class AddInfoSectionFields1630915171407 implements MigrationInterface {
    name = "AddInfoSectionFields1630915171407";

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`portfolio\`.\`info_section\` ADD \`index\` int NOT NULL DEFAULT '0'`);
        await queryRunner.query(
            `ALTER TABLE \`portfolio\`.\`info_section\` ADD \`isActive\` tinyint NOT NULL DEFAULT 1`
        );
        await queryRunner.query(
            `ALTER TABLE \`portfolio\`.\`info_section\` ADD \`isInitiallyFolded\` tinyint NOT NULL DEFAULT 0`
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`portfolio\`.\`info_section\` DROP COLUMN \`isInitiallyFolded\``);
        await queryRunner.query(`ALTER TABLE \`portfolio\`.\`info_section\` DROP COLUMN \`isActive\``);
        await queryRunner.query(`ALTER TABLE \`portfolio\`.\`info_section\` DROP COLUMN \`index\``);
    }
}
