import {Request, Response} from "express";
import { Injectable } from "injection-js";
import 'reflect-metadata';
import { IAddNewsService } from "../../core/services/IAddNewsService";
import { IGetAllNewsService } from "../../core/services/IGetAllNewsService";

@Injectable()
export class NewsController {
    private addNewsService!: IAddNewsService;
    private getAllNewsService!: IGetAllNewsService;
    

    async GetAll(request: Request, response: Response) {
        response.send('responded from get');
    }

    async Add(request: Request, response: Response) {
        response.send('responded from post');
    }

}