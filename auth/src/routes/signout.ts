import { Router } from "express";

const router = Router();

router.post("/api/users/signout", (req, res) => {
  req.session = null;
  res.json({ status: "OK" });
});

export { router as signoutRoute };
