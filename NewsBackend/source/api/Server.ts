import express, { Express } from "express";
import { dependecyInjector } from "./DependencyInjector";
import { NewsRoutes } from "./routes/NewsRoutes";
import morgan from "morgan";

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
    }

    private AddRoutes() {
        const newsRoutes: NewsRoutes = dependecyInjector.resolveAndInstantiate(NewsRoutes);
        this.app.use(newsRoutes.path, newsRoutes.router);
    }

    public Start() {
        this.app.listen(this.app.get('port'), '0.0.0.0', () => console.log('the server is running on', this.app.get('port')));
    }
}