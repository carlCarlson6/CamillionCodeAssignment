import { validate } from "uuid";
import { AddNewsService } from "../source/services/AddNewsService";
import { newsRepositoryMock, newsRepositoryMockException } from "./mocks/NewsRepositoryMock";

const newsEntityInfoToAdd = {
    "title": "title of the article",
    "description": "description of the article",
    "text": "the text of the article",
    "author": "carl"
}

test('Add news', 
    async () => {
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
        const addNewsService: AddNewsService = new AddNewsService(newsRepositoryMockException);
            
        expect(async () => await addNewsService.ExecuteService(newsEntityInfoToAdd.title, newsEntityInfoToAdd.description, newsEntityInfoToAdd.text, newsEntityInfoToAdd.author))
            .rejects
            .toEqual(new Error('error from repo method Create'));
    }
);