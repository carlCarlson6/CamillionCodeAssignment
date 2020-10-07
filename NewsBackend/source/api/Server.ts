import express, { Express } from "express";

export class Server {
    private app: Express;

    constructor() {
        this.app = express();

        this.Config();
    }

    public Config() {
        this.app.set('port', process.env.PORT || 4000);
    }
 
    public Start() {
        this.app.listen(this.app.get('port'), '0.0.0.0', () => console.log('the server is running'));
    }
}