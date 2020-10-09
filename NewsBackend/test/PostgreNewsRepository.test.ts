import { INewsEntity } from "../source/core/models/INewsEntity";
import { InMemoryNewsRepository } from "../source/repository/InMemoryRepository/InMemoryNewsRepository";
import { PostgreNewsRepository } from "../source/repository/PosgreRepository/PostgreNewsRepository";

const repository: PostgreNewsRepository = new PostgreNewsRepository();

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


//test('Create newsEntity', 
//    async () => {  }
//);

test('Read newsEntities',
    async () => {
        await expect(repository.Read).rejects.toEqual(new Error('Method not implemented.'));
    }
);

//test('Read all newsEntities',
//    async () => {  }
//);

test('Update newsEntities',
    async () => {
        await expect(repository.Update).rejects.toEqual(new Error('Method not implemented.'));
    }
);


test('Delete newsEntities',
    async () => {
        await expect(repository.Delete).rejects.toEqual(new Error('Method not implemented.'));
    }
);


repository.Create(newsEntity)