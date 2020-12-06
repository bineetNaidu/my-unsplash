import express from "express";
import cookieSession from "cookie-session";
import mongoose from "mongoose";

import { signupRoute } from "./routes/signup";

const app = express();

mongoose
  .connect(process.env.MONGO_URI!, {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: true,
  })
  .then(() => console.log("Auth Mongo Connected!!"))
  .catch((e) => console.log(e.message));

app.set("trust proxy", true);
app.use(express.json());
app.use(
  cookieSession({
    signed: false,
  })
);

app.use(signupRoute);

app.listen(4242, () => {
  console.log(">>> AUTH SERVICE HAS STARTED <<<");
});
