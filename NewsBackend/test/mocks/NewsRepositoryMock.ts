import { Mock } from "moq.ts";
import { INewsEntity } from "../../source/core/models/INewsEntity";
import { IRepository } from "../../source/core/repository/IRepository";
import { newsEntitiesListToGet } from "./NewEntitiesListToGet";

export const newsRepositoryMock = new Mock<IRepository<INewsEntity>>()
    .setup(instance => instance.Create)
    .returns(async (entity:INewsEntity) => entity)
    .setup(instance => instance.ReadAll)
    .returns(async () => newsEntitiesListToGet)
    .object();

export const newsRepositoryMockException = new Mock<IRepository<INewsEntity>>()
    .setup(instance => instance.Create)
    .returns(async (entity:INewsEntity) => {throw new Error('error from repo method Create')})
    .setup(instance => instance.ReadAll)
    .returns(async () => {throw new Error('error from repo ReadAll')})
    .object();