import { Router } from "express";
import Image from "../model/Image";

const r = Router();

r.get("/api/images/", async (req, res) => {
  try {
    const images = await Image.find({});
    res.json({
      status: "OK",
      images,
    });
  } catch (e) {
    res.status(400).json({
      errors: [
        {
          msg: "Something went Wrong",
        },
      ],
    });
  }
});

export { r as allImageRoute };
