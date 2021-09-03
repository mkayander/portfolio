import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateInfoSectionTable1630671656732 implements MigrationInterface {
    name = "CreateInfoSectionTable1630671656732";

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE \`portfolio\`.\`info_section\` (\`id\` int NOT NULL AUTO_INCREMENT, \`emoji\` varchar(2) NOT NULL, \`title\` varchar(32) NOT NULL, \`content\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`portfolio\`.\`info_section\``);
    }
}
