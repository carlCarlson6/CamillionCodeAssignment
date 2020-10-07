import { Server } from "./api/Server"

const bootstrap = async () => {
    const server: Server = new Server();

    server.Start()
}

bootstrap();