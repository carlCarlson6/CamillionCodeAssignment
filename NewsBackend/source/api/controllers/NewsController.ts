import 'reflect-metadata';
import {Request, Response} from "express";
import { IAddNewsService } from "../../core/services/IAddNewsService";
import { IGetAllNewsService } from "../../core/services/IGetAllNewsService";

export class NewsController {
    private addNewsService: IAddNewsService;
    private getAllNewsService!: IGetAllNewsService;
    
    constructor(addNewsService: IAddNewsService) {
        this.addNewsService = addNewsService;
    }

    async GetAll(request: Request, response: Response) {
        response.send('responded from get');
    }

    async Add(request: Request, response: Response) {
        this.addNewsService.ExecuteService('','','','');
        response.send('responded from post');
    }

}