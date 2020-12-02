import { CustomError } from './custom-error';

export class NotAuthorizedError extends CustomError {
    status = 401;

    constructor() {
        super();

        Object.setPrototypeOf(this, NotAuthorizedError.prototype);
    }

    public getReasons() {
        return [{ message: "Not authorized" }];
    }
}