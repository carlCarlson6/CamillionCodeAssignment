import { Mock } from "moq.ts";
import { v4 as uuidv4 } from "uuid";
import { INewsEntity } from "../../source/core/models/INewsEntity";
import { AddNewsService } from "../../source/services/AddNewsService";


export const addNewsServiceMock: AddNewsService = new Mock<AddNewsService>()
    .setup(instance => instance.ExecuteService)
    .returns(async (title: string, description: string, text: string, author: string) => {
        const creationDate: Date = new Date();
            
        const newsEntityToAdd: INewsEntity = {
            id: uuidv4(),
            title, description, text,
            createdAt: creationDate,
            createdBy: author,
            updatedAt: creationDate,
            updatedBy: author
        }
        return newsEntityToAdd;
    })
    .object();;

export const addNewsServiceMockException: AddNewsService = new Mock<AddNewsService>()    
    .setup(instance => instance.ExecuteService)
    .returns(async () => {throw new Error('error from service')})
    .object();