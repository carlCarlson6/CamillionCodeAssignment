import { Server } from "./api/Server"
import { IDatabaseConnector } from "./core/repository/IDatabaseConnector";
import { TypeOrmDbConnector } from "./repository/PosgreRepository/TypeOrmDbConnector";

const bootstrap = async () => {
    const dbConnector: IDatabaseConnector = new TypeOrmDbConnector();
    await dbConnector.Connect();

    const server: Server = new Server();
    server.Start()
}

bootstrap();