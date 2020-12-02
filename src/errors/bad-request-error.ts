import { CustomError } from './custom-error';
import { ErrorReason } from '../middlewares/error-handler';

export class BadRequestError extends CustomError {
    status = 400;
    constructor(public message: string) {
        super();

        Object.setPrototypeOf(this, BadRequestError.prototype);
    }

    getReasons() {
        return [{
            message: this.message
        }];
    }
}