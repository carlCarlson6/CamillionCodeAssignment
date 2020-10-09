import 'reflect-metadata';
import { Router, Request, Response } from "express";
import { NewsController } from "../controllers/NewsController";
import dependecyInjector from '../DependencyInjector';
import { isAuthorized } from '../middlewares/isAuthorized';

export class NewsRoutes {
    router = Router();
    path: string = '/api/news';
    
    private controller: NewsController = dependecyInjector.newsController;
    private Get = (request: Request, response: Response) => this.controller.GetAll(request, response);
    private Add = (request: Request, response: Response) => this.controller.Add(request, response);

    constructor() {
        this.ConstructRoutes();
    }

    private ConstructRoutes(): void {
        this.router.get('', this.Get);
        this.router.post('', isAuthorized, this.Add);
    }
}