import express from "express";
import cookieSession from "cookie-session";
import mongoose from "mongoose";
import { currentUser } from "./middleware/currentUser";

import { allImageRoute } from "./routers/index";
import { createImageRoute } from "./routers/create";

const app = express();

mongoose
  .connect(process.env.MONGO_URI!, {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: true,
  })
  .then(() => console.log("Images Mongo Connected!!"))
  .catch((e) => console.log(e.message));

app.set("trust proxy", true);
app.use(express.json());
app.use(
  cookieSession({
    signed: false,
  })
);
app.use(currentUser);

app.use(allImageRoute);
app.use(createImageRoute);

app.listen(4242, () => {
  console.log(">>> IMAGES SERVICE HAS STARTED <<<");
});
