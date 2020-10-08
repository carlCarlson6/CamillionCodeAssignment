export interface IRepository<Entity> {
    Create(entity: Entity): Promise<Entity>;
    Read(id: String): Promise<Entity>;
    ReadAll(): Promise<Array<Entity>>;
    Update(id: String, entity: Partial<Entity>): Promise<Entity>;
    Delete(id: String): Promise<void>;
}