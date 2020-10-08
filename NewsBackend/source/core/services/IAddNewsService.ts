import { INewsEntity } from "../models/INewsEntity";

export interface IAddNewsService {
    ExecuteService(title: String, description: String, text: String, author: String): INewsEntity
}