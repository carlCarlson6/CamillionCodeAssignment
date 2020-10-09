import express, { Express, NextFunction, Request, Response } from "express";
import { NewsRoutes } from "./routes/NewsRoutes";
import morgan from "morgan";
import { isAuthenticated } from "./middlewares/isAuthenticated";

export class Server {
    private app: Express;

    constructor() {
        this.app = express();

        this.Config();
    }

    private Config() {
        this.app.set('port', process.env.PORT || 4000);
        this.ApplyMiddleware();
        this.AddRoutes();
    }
 
    private ApplyMiddleware() {
        this.app.use(express.json());
        this.app.use(morgan('dev'));
        this.app.use(isAuthenticated);
    }

    private AddRoutes() {
        const newsRoutes: NewsRoutes = new NewsRoutes();
        this.app.use(newsRoutes.path, newsRoutes.router);
    }

    public Start() {
        this.app.listen(this.app.get('port'), '0.0.0.0', () => console.log('the server is running on', this.app.get('port')));
    }
}