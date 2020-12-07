import { Router, Request, Response } from "express";
import bcrypt from "bcrypt";
import { body, validationResult } from "express-validator";
import jwt from "jsonwebtoken";
import User from "../model/User";

const router = Router();

router.post(
  "/api/users/signin",
  [
    body("email").isEmail().withMessage("Email must be valid"),
    body("password")
      .trim()
      .isLength({ min: 6, max: 24 })
      .withMessage("Password must be Valid and between 6 and 20 Characters"),
  ],
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const { email, password } = req.body;

      const user = await login(email, password);
      const token = jwt.sign({ user }, "qwerty", {
        expiresIn: 3 * 24 * 60 * 60, // ? 3 days,
      });

      res.cookie("jwt", token);
      res.status(200).json({ status: "OK", user });
    } catch (e) {
      res.status(400).json({ errors: [{ msg: e.message }] });
    }
  }
);

async function login(email: string, password: string) {
  const user = await User.findOne({ email });
  if (user) {
    let authUser = await bcrypt.compare(password, user.password);

    if (authUser) {
      return user;
    } else {
      throw new Error("Incorrect Password");
    }
  }
  throw new Error("Incorrect Email");
}

export { router as signinRoute };
