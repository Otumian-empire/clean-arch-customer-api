import "dotenv/config";
import { DataSourceOptions } from "typeorm/data-source/DataSourceOptions";

import { join } from "path";

const Configuration: DataSourceOptions = {
    type: "postgres",
    name: process.env.DB_NAME?.toString(),
    username: process.env.DB_USERNAME?.toString(),
    password: process.env.DB_PASSWORD?.toString(),
    database: process.env.DB_USERNAME?.toString(),
    host: process.env.DB_HOST?.toString(),
    port: Number(process.env.DB_PORT?.toString()),
    logging: true,
    synchronize: true,
    entities: [join(__dirname, "/../Domain/*{.js,.ts}")],
    migrations: [join(__dirname, "/Migration/*{.js,.ts}")],
    subscribers: [],
    migrationsTableName: "custom_migration_table",
};

export default Configuration;
