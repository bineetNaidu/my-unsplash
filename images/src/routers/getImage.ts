import { Router, Request, Response } from "express";
import Image from "../model/Image";

const r = Router();

r.get("/api/images/:id", async (req: Request, res: Response) => {
  try {
    const image = await Image.findById(req.params.id);
    if (!image) {
      throw new Error("Image Not Found");
    }
    res.json({ status: "OK", image });
  } catch (e) {
    res.status(400).json({
      errors: {
        msg: e.message,
      },
    });
  }
});

export { r as getImageByIDRoute };
