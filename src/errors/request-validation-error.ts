import { ValidationError } from 'express-validator';
import { CustomError } from './custom-error';
import { ErrorReason } from '../middlewares/error-handler'; 
import { response } from 'express';

export class RequestValidationError extends CustomError {
    status = 400;

    constructor(private errors: ValidationError[]) {
        super();

        Object.setPrototypeOf(this, RequestValidationError.prototype);
    }

    public getReasons() {
        const reasons: ErrorReason[] = [];

        this.errors.forEach(error => {
            const reason:ErrorReason = {
                message: error.msg,
                field: error.param
            };
            reasons.push(reason);
        });
        
        return reasons;
    }
}