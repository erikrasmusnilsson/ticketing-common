import { ErrorReason } from '../middlewares/error-handler';

export abstract class CustomError extends Error {
    abstract status: number;

    constructor() {
        super();
    }

    public abstract getReasons(): ErrorReason[];
}