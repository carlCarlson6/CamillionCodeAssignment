import { NextFunction, Request, Response } from "express";

export const isAuthorized = (request: Request, response: Response, next: NextFunction) => {
    console.log('- user is authorized -');
    next();
}