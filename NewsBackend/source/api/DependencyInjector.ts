import { INewsEntity } from "../core/models/INewsEntity";
import { IRepository } from "../core/repository/IRepository";
import { IAddNewsService } from "../core/services/IAddNewsService";
import { IGetAllNewsService } from "../core/services/IGetAllNewsService";
import { PostgreNewsRepository } from "../repository/PosgreRepository/PostgreNewsRepository"
import { AddNewsService } from "../services/AddNewsService";
import { GetAllNewsService } from "../services/GetAllNewsService";
import { NewsController } from "./controllers/NewsController";

const newsRepository: IRepository<INewsEntity> = new PostgreNewsRepository();

const addNewsService: IAddNewsService = new AddNewsService(newsRepository);
const getAllNewsService: IGetAllNewsService = new GetAllNewsService(newsRepository)

const newsController = new NewsController(addNewsService, getAllNewsService);

export default {
    newsController
}