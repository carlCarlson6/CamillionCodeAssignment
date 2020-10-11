import { Container } from "inversify";
import { INewsEntity } from "../core/models/INewsEntity";
import { IRepository } from "../core/repository/IRepository";
import { IAddNewsService } from "../core/services/IAddNewsService";
import { IGetAllNewsService } from "../core/services/IGetAllNewsService";
import { PostgreNewsRepository } from "../repository/PosgreRepository/PostgreNewsRepository"
import { AddNewsService } from "../services/AddNewsService";
import { GetAllNewsService } from "../services/GetAllNewsService";
import { NewsController } from "./controllers/NewsController";

export enum TYPES {
    INewsRepository = 'IRepository<INewsEntity>',
    IAddNewsService = 'IAddNewsService',
    IGetAllNewsService = 'IGetAllNewsService',
    NewsController = 'NewsController'
}

const container: Container = new Container();
container.bind<IRepository<INewsEntity>>(TYPES.INewsRepository).to(PostgreNewsRepository);
container.bind<IAddNewsService>(TYPES.IAddNewsService).to(AddNewsService);
container.bind<IGetAllNewsService>(TYPES.IGetAllNewsService).to(GetAllNewsService);
container.bind<NewsController>(TYPES.NewsController).to(NewsController);

export default container