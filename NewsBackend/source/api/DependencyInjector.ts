import { PostgreNewsRepository } from "../repository/PosgreRepository/PostgreNewsRepository"
import { AddNewsService } from "../services/AddNewsService";
import { NewsController } from "./controllers/NewsController";

const newsReposetory = new PostgreNewsRepository();
const addNewsService = new AddNewsService(newsReposetory);
const newsController = new NewsController(addNewsService);

export default {
    newsController
}