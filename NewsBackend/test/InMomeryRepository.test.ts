import { INewsEntity } from "../source/core/models/INewsEntity";
import { InMemoryNewsRepository } from "../source/repository/InMemoryRepository/InMemoryNewsRepository";

const inMemoryRepository: InMemoryNewsRepository = new InMemoryNewsRepository();

const newsEntity: INewsEntity = { 
    id: "123456", 
    title: "title of the article", 
    description: "description of the article",
    text: "the text of the article", 
    createdBy: "carl", 
    createdAt: new Date(), 
    updatedBy: "carl", 
    updatedAt: new Date() 
}


test('Create newsEntity', 
    async () => {
        const oldLength = inMemoryRepository.newsEntities.length
        await inMemoryRepository.Create(newsEntity);
        expect(inMemoryRepository.newsEntities.length).toBe(oldLength+1)
    }
);

test('Read newsEntities',
    async () => {
        await expect(inMemoryRepository.Read).rejects.toEqual(new Error('Method not implemented.'));
    }
);

test('Read all newsEntities',
    async () => {
        expect(await inMemoryRepository.ReadAll()).toBe(inMemoryRepository.newsEntities);
    }
);

test('Update newsEntities',
    async () => {
        await expect(inMemoryRepository.Update).rejects.toEqual(new Error('Method not implemented.'));
    }
);


test('Delete newsEntities',
    async () => {
        await expect(inMemoryRepository.Delete).rejects.toEqual(new Error('Method not implemented.'));
    }
);


inMemoryRepository.Create(newsEntity)