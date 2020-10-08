import { INewsEntity } from "../../core/models/INewsEntity";
import { IRepository } from "../../core/repository/IRepository";
import { NewsEntityModel } from "./entities/NewsEntityModel";

export class PostgreNewsRepository implements IRepository<INewsEntity> {

    async Create(entity: INewsEntity): Promise<INewsEntity> {
        const createdNewsEntity: NewsEntityModel = NewsEntityModel.create(entity);
        await createdNewsEntity.save();
        return createdNewsEntity;
    }
    
    async Read(id: String): Promise<INewsEntity> {
        throw new Error("Method not implemented.");
    }
    
    async ReadAll(): Promise<INewsEntity[]> {
        const allNews = await NewsEntityModel.find();
        return allNews;
    }
    
    async Update(id: String, entity: Partial<INewsEntity>): Promise<INewsEntity> {
        throw new Error("Method not implemented.");
    }
    
    async Delete(id: String): Promise<void> {
        throw new Error("Method not implemented.");
    }

}