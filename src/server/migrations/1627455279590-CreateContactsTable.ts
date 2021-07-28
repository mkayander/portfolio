import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateContactsTable1627455279590 implements MigrationInterface {
    name = "CreateContactAndProjectTables1627455279590";

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            "CREATE TABLE `contact` (`id` int NOT NULL AUTO_INCREMENT, `type` enum ('mobile', 'email', 'url') NOT NULL, `iconUrl` varchar(255) NOT NULL, `title` varchar(255) NOT NULL, `value` varchar(255) NOT NULL, UNIQUE INDEX `IDX_6fff4c1e88edc70946fbe2a576` (`title`), UNIQUE INDEX `IDX_773375ae684fad167502641314` (`value`), PRIMARY KEY (`id`)) ENGINE=InnoDB"
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP INDEX `IDX_773375ae684fad167502641314` ON `contact`");
        await queryRunner.query("DROP INDEX `IDX_6fff4c1e88edc70946fbe2a576` ON `contact`");
        await queryRunner.query("DROP TABLE `contact`");
    }
}
