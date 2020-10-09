import { Server } from "./api/Server"
import { IDatabaseConnector } from "./core/repository/IDatabaseConnector";
import { TypeOrmDbConnector } from "./repository/PosgreRepository/TypeOrmDbConnector";
import dotenv from 'dotenv';

const bootstrap = async () => {
    dotenv.config({path:'dev.env'});

    console.log('connecting to db');
    const dbConnector: IDatabaseConnector = new TypeOrmDbConnector();
    await dbConnector.Connect();

    console.log('starting the server');
    const server: Server = new Server();
    server.Start()
}

bootstrap();