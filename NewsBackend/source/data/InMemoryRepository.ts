import { INewsEntity } from "../core/models/INewsEntity";
import { IRepository } from "../core/repository/IRepository";

export class InMemoryRepository implements IRepository<INewsEntity> {
    newsEntities: Array<INewsEntity> = [];
    
    Create(entity: INewsEntity): INewsEntity {
        this.newsEntities.push(entity);
        return entity;
    }
    Read(id: String): INewsEntity {
        const newsEntity: INewsEntity = this.newsEntities.filter(newEntity => newEntity.id === id)[0];
        return newsEntity;
    }
    ReadAll(): INewsEntity[] {
        return this.newsEntities;
    }
    Update(id: String, entity: Partial<INewsEntity>): INewsEntity {
        let newsEntityToBeUpdated: INewsEntity = this.Read(id);
        
        this.newsEntities = this.newsEntities.map(newsEntity => {
            if(newsEntity.id === id){
                return entity as INewsEntity;
            } else {
                return newsEntity;
            }
        });

        return entity as INewsEntity;
    }
    Delete(id: String): void {
        this.newsEntities = this.newsEntities.filter(newsEntity => newsEntity.id !== id);
    }
}