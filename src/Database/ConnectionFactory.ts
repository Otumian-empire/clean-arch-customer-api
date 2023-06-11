import { DataSource } from "typeorm";
import Configuration from "./Configuration";

export default class ConnectionFactory {
    private static readonly _context: DataSource = new DataSource(
        Configuration
    );

    GetDataSource(): DataSource {
        return ConnectionFactory._context;
    }
}
