import { Mock } from "moq.ts";
import { INewsEntity } from "../source/core/models/INewsEntity";
import { IRepository } from "../source/core/repository/IRepository";
import { GetAllNewsService } from "../source/services/GetAllNewsService";

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

test('Get all news', 
    async () => {
        const newsRepositoryMock = new Mock<IRepository<INewsEntity>>()
            .setup(instance => instance.ReadAll)
            .returns(async () => newsEntitiesListToGet)
            .object();
        const getAllNewsService: GetAllNewsService = new GetAllNewsService(newsRepositoryMock);

        const result = await getAllNewsService.ExecuteService();
        expect(result).toBe(newsEntitiesListToGet)
    }
);

test('Get all news repository exception', 
    async () => {
        const newsRepositoryMock = new Mock<IRepository<INewsEntity>>()
            .setup(instance => instance.ReadAll)
            .returns(async () => {throw new Error('error from repo')})
            .object();
        const getAllNewsService: GetAllNewsService = new GetAllNewsService(newsRepositoryMock);

        expect(async () => await getAllNewsService.ExecuteService())
            .rejects
            .toEqual(new Error('error from repo'));
    }
);