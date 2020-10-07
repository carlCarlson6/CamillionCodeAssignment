import { InjectionToken, Provider, ReflectiveInjector } from "injection-js";
import { NewsController } from "./controllers/NewsController";
import { NewsRoutes } from "./routes/NewsRoutes";


export const NEWS_CONTROLLER = new InjectionToken<NewsController>('NEWS_CONTROLLER');

const providers: Array<Provider> = [
    {provide: NEWS_CONTROLLER, useClass: NewsController}
];

export const dependecyInjector = ReflectiveInjector.resolveAndCreate(providers);
