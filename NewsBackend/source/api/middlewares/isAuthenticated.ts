import { NextFunction, Request, Response } from "express";

export const isAuthenticated = (request: Request, response: Response, next: NextFunction) => {
    console.log('- user is authenticated -')
    next();
}