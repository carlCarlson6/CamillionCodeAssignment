import 'reflect-metadata';
import { Server } from "./api/Server"
import { TypeOrmDbConnector } from "./repository/PosgreRepository/TypeOrmDbConnector";
import dotenv from 'dotenv';

const bootstrap = async () => {
    dotenv.config({path:'dev.env'});

    console.log('connecting to db');
    await TypeOrmDbConnector.GetInstance().Connect();
    
    console.log('starting the server');
    const server: Server = new Server();
    server.Start()
}

bootstrap();