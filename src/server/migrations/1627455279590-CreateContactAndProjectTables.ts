import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateContactAndProjectTables1627455279590 implements MigrationInterface {
    name = "CreateContactAndProjectTables1627455279590";

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            "CREATE TABLE `contact` (`id` int NOT NULL AUTO_INCREMENT, `type` enum ('mobile', 'email', 'url') NOT NULL, `iconUrl` varchar(255) NOT NULL, `title` varchar(255) NOT NULL, `value` varchar(255) NOT NULL, UNIQUE INDEX `IDX_6fff4c1e88edc70946fbe2a576` (`title`), UNIQUE INDEX `IDX_773375ae684fad167502641314` (`value`), PRIMARY KEY (`id`)) ENGINE=InnoDB"
        );
        await queryRunner.query(
            "CREATE TABLE `project` (`id` int NOT NULL AUTO_INCREMENT, `title` varchar(255) NOT NULL, `subtitle` varchar(255) NOT NULL, `url` varchar(255) NOT NULL, `year` int NOT NULL, `description` text NOT NULL, UNIQUE INDEX `IDX_cb001317127de4d5e323b5c0c4` (`title`), UNIQUE INDEX `IDX_8d808c7a5db7ec711bdda58339` (`url`), PRIMARY KEY (`id`)) ENGINE=InnoDB"
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP INDEX `IDX_8d808c7a5db7ec711bdda58339` ON `project`");
        await queryRunner.query("DROP INDEX `IDX_cb001317127de4d5e323b5c0c4` ON `project`");
        await queryRunner.query("DROP TABLE `project`");
        await queryRunner.query("DROP INDEX `IDX_773375ae684fad167502641314` ON `contact`");
        await queryRunner.query("DROP INDEX `IDX_6fff4c1e88edc70946fbe2a576` ON `contact`");
        await queryRunner.query("DROP TABLE `contact`");
    }
}
