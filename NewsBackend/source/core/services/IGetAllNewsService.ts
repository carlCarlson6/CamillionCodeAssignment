import { INewsEntity } from "../models/INewsEntity";

export interface IGetAllNewsService {
    ExecuteService(): Promise<Array<INewsEntity>>
}