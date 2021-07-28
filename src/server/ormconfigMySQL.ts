import { ConnectionOptions } from "typeorm";

import * as dotenv from "dotenv";

dotenv.config();

const connectionOptions: ConnectionOptions = {
    type: "mysql",
    host: "localhost",
    port: 3306,
    synchronize: false,
    database: process.env.MYSQL_DB_NAME,
    username: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    entities: ["dist/**/entities/*.js"],
    migrations: ["dist/migrations/*.js"],
    cli: {
        migrationsDir: "src/server/migrations",
    },
};

export = connectionOptions;

console.log(connectionOptions);
