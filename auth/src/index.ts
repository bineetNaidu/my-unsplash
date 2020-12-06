import express from "express";
import cookieSession from "cookie-session";

import { signupRoute } from "./routes/signup";

const app = express();

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
