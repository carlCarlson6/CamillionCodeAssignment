import { INewsEntity } from "../../core/models/INewsEntity";
import { IRepository } from "../../core/repository/IRepository";
import { NewsEntityModel } from "./models/NewsEntityModel";

export class PostgreNewsRepository implements IRepository<INewsEntity> {

    async Create(entity: INewsEntity): Promise<INewsEntity> {
        const createdNewsEntity: NewsEntityModel = NewsEntityModel.create(entity);
        await createdNewsEntity.save();
        return createdNewsEntity;
    }
    
    Read(id: String): Promise<INewsEntity> {
        throw new Error("Method not implemented.");
    }
    ReadAll(): Promise<INewsEntity[]> {
        throw new Error("Method not implemented.");
    }
    Update(id: String, entity: Partial<INewsEntity>): Promise<INewsEntity> {
        throw new Error("Method not implemented.");
    }
    Delete(id: String): Promise<void> {
        throw new Error("Method not implemented.");
    }

}