import { GetAllNewsService } from "../source/services/GetAllNewsService";
import { newsEntitiesListToGet } from "./mocks/NewEntitiesListToGet";
import { newsRepositoryMock, newsRepositoryMockException } from "./mocks/NewsRepositoryMock";


test('Get all news', 
    async () => {
        const getAllNewsService: GetAllNewsService = new GetAllNewsService(newsRepositoryMock);

        const result = await getAllNewsService.ExecuteService();
        expect(result).toBe(newsEntitiesListToGet)
    }
);

test('Get all news repository exception', 
    async () => {
        const getAllNewsService: GetAllNewsService = new GetAllNewsService(newsRepositoryMockException);

        expect(async () => await getAllNewsService.ExecuteService())
            .rejects
            .toEqual(new Error('error from repo ReadAll'));
    }
);