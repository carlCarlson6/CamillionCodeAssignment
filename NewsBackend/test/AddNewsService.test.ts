import { exception } from "console";
import { Mock } from "moq.ts";
import { validate } from "uuid";
import { INewsEntity } from "../source/core/models/INewsEntity";
import { IRepository } from "../source/core/repository/IRepository";
import { AddNewsService } from "../source/services/AddNewsService";

const newsEntityInfoToAdd = {
    "title": "title of the article",
    "description": "description of the article",
    "text": "the text of the article",
    "author": "carl"
}

test('Add news', 
    async () => {
        const newsRepositoryMock = new Mock<IRepository<INewsEntity>>()
            .setup(instance => instance.Create)
            .returns(async (entity:INewsEntity) => entity)
            .object();
        const addNewsService: AddNewsService = new AddNewsService(newsRepositoryMock);
        
        const result = await addNewsService.ExecuteService(newsEntityInfoToAdd.title, newsEntityInfoToAdd.description, newsEntityInfoToAdd.text, newsEntityInfoToAdd.author);
        
        expect(validate(result.id)).toBeTruthy()
        expect(result.title).toBe(newsEntityInfoToAdd.title);
        expect(result.description).toBe(newsEntityInfoToAdd.description);
        expect(result.text).toBe(newsEntityInfoToAdd.text);
        expect(result.createdBy).toBe(newsEntityInfoToAdd.author);
        expect(result.updatedBy).toBe(newsEntityInfoToAdd.author);
        expect(result.createdAt instanceof Date).toBeTruthy();
        expect(result.updatedAt instanceof Date).toBeTruthy();
        
    }
);

test('Add news repository exception', 
    async () => {
        const newsRepositoryMock = new Mock<IRepository<INewsEntity>>()
            .setup(instance => instance.Create)
            .returns(async (entity:INewsEntity) => {throw new Error('error from repo')})
            .object();
        const addNewsService: AddNewsService = new AddNewsService(newsRepositoryMock);
            
        expect(async () => await addNewsService.ExecuteService(newsEntityInfoToAdd.title, newsEntityInfoToAdd.description, newsEntityInfoToAdd.text, newsEntityInfoToAdd.author))
            .rejects
            .toEqual(new Error('error from repo'));
    }
);