import 'reflect-metadata';
import { Router, Request, Response } from "express";
import { Inject } from "injection-js";
import { NewsController } from "../controllers/NewsController";
import { NEWS_CONTROLLER } from "../DependencyInjector";


export class NewsRoutes {
    router = Router();
    path: string = '/api/news';
    private controller: NewsController;

    constructor(@Inject(NEWS_CONTROLLER) controller: NewsController) {
        this.controller = controller;
        this.ConstructRoutes();
    }

    private ConstructRoutes(): void {
        this.router.get('', (request: Request, response: Response) => this.controller.GetAll(request, response));
        this.router.post('', (request: Request, response: Response) => this.controller.Add(request, response));
    }
}