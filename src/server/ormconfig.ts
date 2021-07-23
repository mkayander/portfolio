import { ConnectionOptions } from "typeorm";

import * as dotenv from "dotenv";

dotenv.config();

const connectionOptions: ConnectionOptions = {
    type: "mongodb",
    url: process.env.MONGODB_CONNECTION_URL || "mongodb://localhost:27017/",
    database: process.env.MONGODB_DATABASE,
    // entities: [join(__dirname, "**", "entities", "*.entity{.ts,.js}")],
    entities: ["dist/**/entities/*.js"],
    // entities: ["src/server/**/entities/*.entity.ts"],
    migrations: ["dist/migrations/*.js"],
    // migrations: ["src/server/migrations/*.{ts,js}"],
    // ssl: true
    useUnifiedTopology: true,
    useNewUrlParser: true,
    // migrations: [join(__dirname, "migrations/*{.ts,.js}")],
    cli: {
        migrationsDir: "src/server/migrations",
    },
};

export = connectionOptions;

console.log(connectionOptions);
