import 'reflect-metadata';
import { Router, Request, Response } from "express";
import { NewsController } from "../controllers/NewsController";
import { dependecyInjector } from '../DependencyInjector';


export class NewsRoutes {
    router = Router();
    path: string = '/api/news';
    private controller: NewsController = dependecyInjector.resolveAndInstantiate(NewsRoutes);;

    constructor() {
        this.ConstructRoutes();
    }

    private ConstructRoutes(): void {
        this.router.get('', (request: Request, response: Response) => this.controller.GetAll(request, response));
        this.router.post('', (request: Request, response: Response) => this.controller.Add(request, response));
    }
}