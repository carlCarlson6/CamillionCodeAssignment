import { INewsEntity } from "../../core/models/INewsEntity";
import { IRepository } from "../../core/repository/IRepository";

export class PostgreNewsRepository implements IRepository<INewsEntity> {
    Create(entity: INewsEntity): INewsEntity {
        throw new Error("Method not implemented.");
    }
    
    Read(id: String): INewsEntity {
        throw new Error("Method not implemented.");
    }
    
    ReadAll(): INewsEntity[] {
        throw new Error("Method not implemented.");
    }
    
    Update(id: String, entity: Partial<INewsEntity>): INewsEntity {
        throw new Error("Method not implemented.");
    }
    
    Delete(id: String): void {
        throw new Error("Method not implemented.");
    }

}