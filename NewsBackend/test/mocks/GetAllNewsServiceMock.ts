import { Mock } from "moq.ts";
import { GetAllNewsService } from "../../source/services/GetAllNewsService";
import { newsEntitiesListToGet } from "./NewEntitiesListToGet";


export const getAllNewsServiceMock: GetAllNewsService = new Mock<GetAllNewsService>()
    .setup(instance => instance.ExecuteService)
    .returns(async () => newsEntitiesListToGet)
    .object();

export const getAllNewsServiceMockException: GetAllNewsService = new Mock<GetAllNewsService>()
    .setup(instance => instance.ExecuteService)
    .returns(async () => {throw new Error('error from service')})
    .object();