import { NewsController } from "../source/api/controllers/NewsController";
import { Request, Response } from "express";
import { ResponseMock } from "./mocks/ResponseMock";
import { RequestMock } from "./mocks/RequestMock";
import { addNewsServiceMock, addNewsServiceMockException } from "./mocks/AddNewsServiceMock";
import { getAllNewsServiceMock, getAllNewsServiceMockException } from "./mocks/GetAllNewsServiceMock";


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