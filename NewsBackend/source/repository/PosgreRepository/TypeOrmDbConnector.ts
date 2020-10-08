import { createConnection } from "typeorm";
import { IDatabaseConnector } from "../../core/repository/IDatabaseConnector";

export class TypeOrmDbConnector implements IDatabaseConnector {
    async Connect(): Promise<void> {
        await createConnection(
            {
                type: "postgres",
                host: process.env.postgres_host,
                database: process.env.postgres_database,
                username: process.env.postgres_user,
                port: parseInt(process.env.postgres_port!),
                password: process.env.postgres_password,

                synchronize: true,
                logging: true,
                entities: ["**/entities/**/*.*"],
                ssl: true,
                extra: {
                    ssl: {
                        rejectUnauthorized: false
                    }
                }
            
            }
        ).then(() => console.log('connected to DB'));
    }

}