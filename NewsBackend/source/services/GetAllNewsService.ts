import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import { INewsEntity } from "../core/models/INewsEntity";
import { IRepository } from "../core/repository/IRepository";
import { IGetAllNewsService } from "../core/services/IGetAllNewsService";

@injectable()
export class GetAllNewsService implements IGetAllNewsService {
    private newsRepository: IRepository<INewsEntity>;

    constructor(@inject('IRepository<INewsEntity>') newsRepository: IRepository<INewsEntity>) {
        this.newsRepository = newsRepository;
    }

    async ExecuteService(): Promise<Array<INewsEntity>> {
        try {
            const allNews: Array<INewsEntity> = await this.newsRepository.ReadAll();
            return allNews;
        }
        catch(exception) {
            throw exception;
        }
    }

}