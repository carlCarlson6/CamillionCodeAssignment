import 'reflect-metadata';
import { INewsEntity } from "../core/models/INewsEntity";
import { IRepository } from "../core/repository/IRepository";
import { IAddNewsService } from "../core/services/IAddNewsService";

export class AddNewsService implements IAddNewsService {
    private newsRepository: IRepository<INewsEntity>;
    
    constructor(newsRepository: IRepository<INewsEntity>) {
        console.log('world')
    }


    ExecuteService(title: String, description: String, text: String, author: String): INewsEntity {
        console.log('executed service');
        throw new Error("Method not implemented.");
    }

}