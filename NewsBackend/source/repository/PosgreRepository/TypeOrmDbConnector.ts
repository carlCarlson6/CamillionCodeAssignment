import { createConnection } from "typeorm";
import { IDatabaseConnector } from "../../core/repository/IDatabaseConnector";

export class TypeOrmDbConnector implements IDatabaseConnector {
    async Connect(): Promise<void> {
        await createConnection(
            {
                type: "postgres",
                url: `postgres://${process.env.postgres_user}:${process.env.postgres_password}@${process.env.postgres_host}:${process.env.postgres_port}/${process.env.postgres_database}`,
                synchronize: true,
                logging: true,
                entities: ["build/**/entities/**/*.*"],
                ssl: true,
                extra: {
                    ssl: {
                        rejectUnauthorized: false
                    }
                }
            
            }
        ).then(() => console.log('connected to DB')).catch(error => console.log("error while connecting to db => ", error));
    }
    
}