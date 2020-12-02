import { Request, Response, NextFunction } from 'express';
import jwt, { verify } from 'jsonwebtoken';

interface UserPayload {
    id: string;
    email: string; 
}

declare global {
    namespace Express {
        interface Request {
            user?: UserPayload;
        }
    }
}

export const currentUser = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (!req.session?.jwt) {
        return next();
    }

    try {
        const user = jwt.verify(
            req.session.jwt,
            process.env.JWT_KEY!
        ) as UserPayload;
        req.user = user;
    } catch (err) {
        
    }

    next();
}