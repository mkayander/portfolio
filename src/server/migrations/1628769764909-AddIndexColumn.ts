import { MigrationInterface, QueryRunner } from "typeorm";

export class AddIndexColumn1628769764909 implements MigrationInterface {
    name = "AddIndexColumn1628769764909";

    public async up(queryRunner: QueryRunner): Promise<void> {
        // SET SQL_SAFE_UPDATES = 0;
        // ALTER TABLE `contact` ADD `index` int NOT NULL;
        // UPDATE `contact` SET `index` = (FLOOR(RAND()*(100-10)+10)) WHERE `index` = 0;
        // SET SQL_SAFE_UPDATES = 1;
        await queryRunner.query("SET SQL_SAFE_UPDATES = 0");
        await queryRunner.query("ALTER TABLE `contact` ADD `index` int NOT NULL");
        await queryRunner.query("UPDATE `contact` SET `index` = FLOOR(RAND()*(100-10)+10)");
        await queryRunner.query("ALTER TABLE `contact` ADD UNIQUE INDEX `IDX_01112e50b493dc0fdc588335ad` (`index`)");
        await queryRunner.query("SET SQL_SAFE_UPDATES = 1");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `contact` DROP INDEX `IDX_01112e50b493dc0fdc588335ad`");
        await queryRunner.query("ALTER TABLE `contact` DROP COLUMN `index`");
    }
}
