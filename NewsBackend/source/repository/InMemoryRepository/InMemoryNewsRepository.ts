import { INewsEntity } from "../../core/models/INewsEntity";
import { IRepository } from "../../core/repository/IRepository";

export class InMemoryNewsRepository implements IRepository<INewsEntity> {
    newsEntities: Array<INewsEntity> = [];
    
    Create(entity: INewsEntity): INewsEntity {
        this.newsEntities.push(entity);
        return entity;
    }

    Read(id: String): INewsEntity {
        throw new Error("Method not implemented.");  
    }
    
    ReadAll(): Array<INewsEntity> {
        return this.newsEntities;
    }
    
    Update(id: String, entity: INewsEntity): INewsEntity {       
        throw new Error("Method not implemented.");
    }
    
    Delete(id: String): void {
        throw new Error("Method not implemented.");
    }
}