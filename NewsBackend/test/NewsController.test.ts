import { AddNewsService } from "../source/services/AddNewsService";
import { GetAllNewsService } from "../source/services/GetAllNewsService";
import { Mock } from "moq.ts";
import { INewsEntity } from "../source/core/models/INewsEntity";
import { NewsController } from "../source/api/controllers/NewsController";
import { Request, Response } from "express";
import { ResponseMock } from "./mock/ResponseMock";
import { v4 as uuidv4 } from 'uuid';
import { RequestMock } from "./mock/RequestMock";

const newsEntitiesListToGet: Array<INewsEntity> = [ 
    {
        "id": "fa3fa6b0-b6bb-46ed-9b16-b646b71278b3",
        "title": "title of the article",
        "description": "description of the article",
        "text": "the text of the article",
        "createdBy": "carl",
        "createdAt": new Date("2020-10-09T14:04:54.848Z"),
        "updatedBy": "carl",
        "updatedAt": new Date("2020-10-09T14:04:54.848Z")
    },
    {
        "id": "313fa4ca-1470-4ca2-8edb-6d805b892cd1",
        "title": "title of another article",
        "description": "description of another article",
        "text": "the text of another article",
        "createdBy": "carl",
        "createdAt": new Date("2020-10-09T14:10:16.300Z"),
        "updatedBy": "carl",
        "updatedAt": new Date("2020-10-09T14:10:16.300Z")
    }
]

const getAllNewsServiceMock: GetAllNewsService = new Mock<GetAllNewsService>()
    .setup(instance => instance.ExecuteService)
    .returns(async () => newsEntitiesListToGet)
    .object();
const addNewsServiceMock: AddNewsService = new Mock<AddNewsService>()
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
const getAllNewsServiceMockException: GetAllNewsService = new Mock<GetAllNewsService>()
    .setup(instance => instance.ExecuteService)
    .returns(async () => {throw new Error('error from service')})
    .object();
const addNewsServiceMockException: AddNewsService = new Mock<AddNewsService>()    
    .setup(instance => instance.ExecuteService)
    .returns(async (title: string, description: string, text: string, author: string) => {throw new Error('error from service')})
    .object();

const newsController: NewsController = new NewsController(addNewsServiceMock, getAllNewsServiceMock);
const newsControllerException: NewsController = new NewsController(addNewsServiceMockException, getAllNewsServiceMockException);

const responseMock: any = new ResponseMock();
const requestMock: any = new RequestMock({
    "title": "title of the article",
    "description": "description of the article",
    "text": "the text of the article",
    "author": "Carl"
});
const incompleteRequestMock: any = new RequestMock({});

test('News controller get all news code 200',
    async () => {
        const response: Response<any> = await newsController.GetAll({} as Request, responseMock as Response)
        expect(response.statusCode).toBe(200);
    }
);

test('News controller get all news code 500',
    async () => {
        const response: Response<any> = await newsControllerException.GetAll({} as Request, responseMock as Response)
        expect(response.statusCode).toBe(500);
    }
);

test('News controller add news code 200',
    async () => {
        const response: Response<any> = await newsController.Add(requestMock as Request, responseMock as Response)
        expect(response.statusCode).toBe(200);
    }
);

test('News controller add news code 400',
    async () => {
        const response: Response<any> = await newsController.Add(incompleteRequestMock as Request, responseMock as Response)
        expect(response.statusCode).toBe(400);
    }
);

test('News controller add news code 500',
    async () => {
        const response: Response<any> = await newsControllerException.Add(requestMock as Request, responseMock as Response)
        expect(response.statusCode).toBe(500);
    }
);