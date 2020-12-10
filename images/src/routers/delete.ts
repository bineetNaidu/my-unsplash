import { Router } from "express";
import Image from "../model/Image";

const r = Router();

r.delete("/api/images/:id", async (req, res) => {
  try {
    if (!req.currentUser) {
      throw new Error("Unauthorized");
    }
    const image = await Image.findById(req.params.id);
    if (!image) {
      throw new Error("Image Not Found");
    }
    const userID = req.currentUser.user._id;
    if (userID !== image.uploadedBy) {
      throw new Error("Unauthorized");
    }

    await image.delete();

    res.status(201).json({ status: "OK" });
  } catch (e) {
    res.status(400).json({
      errors: {
        msg: e.message,
      },
    });
  }
});

export { r as deleteImageRoute };
