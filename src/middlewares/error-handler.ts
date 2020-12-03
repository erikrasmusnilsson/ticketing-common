import { Request, Response, NextFunction } from "express";
import { CustomError } from '../errors/custom-error';


export interface ErrorReason {
    message: string;
    field?: string
}

export const errorHandler = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (err instanceof CustomError) {
        return handleCustomError(err, res);
    }

    console.error(err);
    res.status(500).send([{ message: err.message }]);
}

const handleCustomError = (err: CustomError, res: Response) => {
    res.status(err.status).send(err.getReasons());
}