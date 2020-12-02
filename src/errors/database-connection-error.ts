import { CustomError } from './custom-error';
import { ErrorReason } from '../middlewares/error-handler';

export class DatabaseConnectionError extends CustomError {
    status = 500;
    reason = "Error connecting to database.";
    
    constructor() {
        super();

        Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
    }

    public getReasons() {
        const reason: ErrorReason = {
            message: this.reason
        };

        return [reason];
    }
}