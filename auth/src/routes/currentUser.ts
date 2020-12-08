import { Router, NextFunction, Response, Request } from "express";
import jwt from "jsonwebtoken";

const router = Router();

router.get("/api/users/currentuser", currentUser, async (req, res) => {
  res.json({ currentUser: req.currentUser || null });
});

interface UserPayload {
  email: string;
  _id?: string;
  id?: string;
  username: string;
  hobby: string;
}

declare global {
  namespace Express {
    interface Request {
      currentUser?: UserPayload;
    }
  }
}

function currentUser(req: Request, res: Response, next: NextFunction) {
  if (!req.session?.jwt) {
    return next();
  }
  try {
    const payload = jwt.verify(req.session.jwt, "qwerty") as UserPayload;
    req.currentUser = payload;
  } catch (e) {}
  next();
}

export { router as currentUserRouter };
