import { Router, Request, Response } from "express";
import { body, validationResult } from "express-validator";
import jwt from "jsonwebtoken";
import User from "../model/User";

const router = Router();

router.post(
  "/api/users/signup",
  [
    body("username").isString().withMessage("Username must be valid"),
    body("hobby").isString().withMessage("Hobby must be valid"),
    body("email").isEmail().withMessage("Email must be valid"),
    body("password")
      .trim()
      .isLength({ min: 6, max: 24 })
      .withMessage("Password must be between 6 and 20 Characters"),
  ],
  async (req: Request, res: Response) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const { username, email, password, hobby } = req.body;

      const user = await new User({ username, email, password, hobby }).save();
      const token = jwt.sign({ user }, "qwerty", {
        expiresIn: 3 * 24 * 60 * 60, // ? 3 days,
      });

      res.cookie("jwt", token);
      res.json({ status: "OK", user });
    } catch (e) {
      res.status(400).json({ errors: [{ msg: e.message }] });
    }
  }
);

export { router as signupRoute };
