export interface IRepository<Entity> {
    Create(entity: Entity): Entity;
    Read(id: String): Entity;
    ReadAll(): Array<Entity>;
    Update(id: String, entity: Partial<Entity>): Entity;
    Delete(id: String): void;
}