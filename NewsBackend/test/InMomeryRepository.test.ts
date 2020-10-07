import { INewsEntity } from "../source/core/models/INewsEntity";
import { InMemoryRepository } from "../source/data/InMemoryRepository";

const inMemoryRepository: InMemoryRepository = new InMemoryRepository();

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
    () => {
        const oldLength = inMemoryRepository.newsEntities.length
        inMemoryRepository.Create(newsEntity);
        expect(inMemoryRepository.newsEntities.length).toBe(oldLength+1)
    }
);

test('Read newsEntities',
    () => {
        expect(inMemoryRepository.Read).toThrow('Method not implemented.');
    }
);

test('Read all newsEntities',
    () => {
        expect(inMemoryRepository.ReadAll()).toBe(inMemoryRepository.newsEntities);
    }
);

test('Update newsEntities',
    () => {
        expect(inMemoryRepository.Update).toThrow('Method not implemented.');
    }
);


test('Delete newsEntities',
    () => {
        expect(inMemoryRepository.Delete).toThrow('Method not implemented.');
    }
);


inMemoryRepository.Create(newsEntity)