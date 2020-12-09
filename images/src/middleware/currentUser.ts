import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

interface UserPayload {
  user: {
    email: string;
    _id?: string;
    id?: string;
    username: string;
    hobby: string;
  };
}

declare global {
  namespace Express {
    interface Request {
      currentUser?: UserPayload;
    }
  }
}

export function currentUser(req: Request, res: Response, next: NextFunction) {
  if (!req.session?.jwt) {
    return next();
  }
  try {
    const payload = jwt.verify(req.session.jwt, "qwerty") as UserPayload;
    req.currentUser = payload;
  } catch (e) {}
  next();
}
