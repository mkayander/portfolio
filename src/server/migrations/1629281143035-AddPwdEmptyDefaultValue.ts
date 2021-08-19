import { MigrationInterface, QueryRunner } from "typeorm";

export class AddPwdEmptyDefaultValue1629281143035 implements MigrationInterface {
    name = "AddPwdEmptyDefaultValue1629281143035";

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE \`portfolio\`.\`user\` CHANGE \`passwordHash\` \`passwordHash\` varchar(255) NOT NULL DEFAULT ''`
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE \`portfolio\`.\`user\` CHANGE \`passwordHash\` \`passwordHash\` varchar(255) NOT NULL`
        );
    }
}
