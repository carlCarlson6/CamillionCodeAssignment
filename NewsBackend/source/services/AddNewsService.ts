import 'reflect-metadata';
import { INewsEntity } from "../core/models/INewsEntity";
import { IRepository } from "../core/repository/IRepository";
import { IAddNewsService } from "../core/services/IAddNewsService";
import { v4 as uuidv4 } from 'uuid';

export class AddNewsService implements IAddNewsService {
    private newsRepository: IRepository<INewsEntity>;
    
    constructor(newsRepository: IRepository<INewsEntity>) {
        this.newsRepository = newsRepository;
    }

    async ExecuteService(title: String, description: String, text: String, author: String): Promise<INewsEntity> { 
        try {
            const creationDate: Date = new Date();
            
            const newsEntityToAdd: INewsEntity = {
                id: uuidv4(),
                title, description, text,
                createdAt: creationDate,
                createdBy: author,
                updatedAt: creationDate,
                updatedBy: author
            }

            const createdNewsEntity: INewsEntity = await this.newsRepository.Create(newsEntityToAdd);
            return createdNewsEntity;

        } catch(exception) {
            throw exception;
        }
    }

}