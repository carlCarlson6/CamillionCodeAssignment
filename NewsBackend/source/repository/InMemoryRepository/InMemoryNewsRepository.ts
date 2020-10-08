import { INewsEntity } from "../../core/models/INewsEntity";
import { IRepository } from "../../core/repository/IRepository";

export class InMemoryNewsRepository implements IRepository<INewsEntity> {
    newsEntities: Array<INewsEntity> = [];
    
    async Create(entity: INewsEntity): Promise<INewsEntity> {
        this.newsEntities.push(entity);
        return entity;
    }

    async Read(id: String): Promise<INewsEntity> {
        throw new Error("Method not implemented.");  
    }
    
    async ReadAll(): Promise<Array<INewsEntity>> {
        return this.newsEntities;
    }
    
    async Update(id: String, entity: INewsEntity): Promise<INewsEntity> {       
        throw new Error("Method not implemented.");
    }
    
    async Delete(id: String): Promise<void> {
        throw new Error("Method not implemented.");
    }
}