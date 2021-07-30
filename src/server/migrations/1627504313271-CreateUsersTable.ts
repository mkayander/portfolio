import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUsersTable1627504313271 implements MigrationInterface {
    name = "CreateUsersTable1627504313271";

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            "CREATE TABLE `user` (`id` int NOT NULL AUTO_INCREMENT, `roles` enum ('user', 'admin') NOT NULL DEFAULT 'user', `email` varchar(255) NOT NULL, `passwordHash` varchar(255) NOT NULL, UNIQUE INDEX `IDX_e12875dfb3b1d92d7d7c5377e2` (`email`), PRIMARY KEY (`id`)) ENGINE=InnoDB"
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP INDEX `IDX_e12875dfb3b1d92d7d7c5377e2` ON `user`");
        await queryRunner.query("DROP TABLE `user`");
    }
}
