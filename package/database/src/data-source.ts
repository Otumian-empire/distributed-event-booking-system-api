import "reflect-metadata";

import { EnvConstants } from "@packages/core";
import { join } from "path";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: EnvConstants.DATABASE_HOST,
    port: EnvConstants.DATABASE_PORT,
    username: EnvConstants.DATABASE_USERNAME,
    password: EnvConstants.DATABASE_PASSWORD,
    database: EnvConstants.DATABASE_NAME,
    synchronize: false,
    logging: EnvConstants.isDevelopment(),
    entities: [join(__dirname, "/entity/*{.js,.ts}")],
    migrations: [join(__dirname, "/migration/*{.js,.ts}")],
    subscribers: [],
    migrationsTableName: "customMigrationTable",
});
