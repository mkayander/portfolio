import { MigrationInterface, QueryRunner } from "typeorm";

export class AddIsActiveField1630565009182 implements MigrationInterface {
    name = "AddIsActiveField1630565009182";

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`portfolio\`.\`contact\` ADD \`isActive\` tinyint NOT NULL DEFAULT 1`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`portfolio\`.\`contact\` DROP COLUMN \`isActive\``);
    }
}
