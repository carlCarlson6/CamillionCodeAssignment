import 'reflect-metadata';
import {Request, Response} from "express";
import { IAddNewsService } from "../../core/services/IAddNewsService";
import { IGetAllNewsService } from "../../core/services/IGetAllNewsService";
import { AddNewsRequest } from '../messages/AddNewsRequest';
import { INewsEntity } from '../../core/models/INewsEntity';

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
        try {
            const addNewsRequest: AddNewsRequest = new AddNewsRequest(request.body);
            const createdNewsEntity: INewsEntity = await this.addNewsService.ExecuteService(addNewsRequest.title, addNewsRequest.description, addNewsRequest.text, addNewsRequest.author);
        
            response.status(200).send(createdNewsEntity);
        
        } catch(exception) {
            let statusCode: number;
            exception.message === 'bad request' ? statusCode = 400 : statusCode = 500;

            response.status(statusCode).send(exception.message);
        }
        
    }

}