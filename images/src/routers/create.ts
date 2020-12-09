import { Router, Request, Response } from "express";
import { body, validationResult } from "express-validator";
import { currentUser } from "../middleware/currentUser";
import Image from "../model/Image";

const r = Router();

r.post(
  "/api/images/",
  [
    body("url").notEmpty().isString().withMessage("Please provide a image url"),
    body("name")
      .notEmpty()
      .isString()
      .withMessage("Please provide a image name"),
    body("description")
      .isString()
      .withMessage("Please provide a image description"),
  ],
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { url, name, description } = req.body;

    try {
      if (req.currentUser) {
        const image = new Image({
          url,
          name,
          description,
          uploadedBy: req.currentUser.user._id,
        });
        await image.save();
        res.status(201).json({ status: "OK", image });
      } else {
        throw new Error("Not Authorized");
      }
    } catch (e) {
      res.status(400).json({
        errors: {
          msg: e.message,
        },
      });
    }
  }
);

export { r as createImageRoute };
