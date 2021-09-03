import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterContentTypeText1630677204272 implements MigrationInterface {
    name = "AlterContentTypeText1630677204272";

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`portfolio\`.\`info_section\` DROP COLUMN \`content\``);
        await queryRunner.query(`ALTER TABLE \`portfolio\`.\`info_section\` ADD \`content\` text NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`portfolio\`.\`info_section\` DROP COLUMN \`content\``);
        await queryRunner.query(`ALTER TABLE \`portfolio\`.\`info_section\` ADD \`content\` varchar(255) NOT NULL`);
    }
}
