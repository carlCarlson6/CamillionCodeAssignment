import { INewsEntity } from "../models/INewsEntity";

export interface IGetAllNewsService {
    ExecuteService(): Array<INewsEntity>
}