import {Request, Response} from "express";
import { Injectable } from "injection-js";
import 'reflect-metadata';

@Injectable()
export class NewsController {
    
    async GetAll(request: Request, response: Response) {
        response.send('responded from get');
    }

    async Add(request: Request, response: Response) {
        response.send('responded from post');
    }

}