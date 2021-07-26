import { ConnectionOptions } from "typeorm";

import * as dotenv from "dotenv";

dotenv.config();

const connectionOptions: ConnectionOptions = {
    type: "mongodb",
    url: process.env.MONGODB_CONNECTION_URL || "mongodb://localhost:27017/",
    database: process.env.MONGODB_DATABASE,
    entities: ["dist/**/entities/*.js"],
    migrations: ["dist/migrations/*.js"],
    synchronize: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    cli: {
        migrationsDir: "src/server/migrations",
    },
};

export = connectionOptions;

console.log(connectionOptions);
