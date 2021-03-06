import mongoose from "mongoose";
import bcrypt from "bcrypt";

interface UserDoc extends mongoose.Document {
  username: string;
  password: string;
  email: string;
  hobby: string;
}

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    hobby: String,
  },
  {
    toJSON: {
      transform(doc, ret) {
        delete ret.password;
      },
    },
  }
);
UserSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    const salt = await bcrypt.genSalt();
    const hashed = await bcrypt.hash(this.get("password"), salt);
    this.set("password", hashed);
  }
});

export default mongoose.model<UserDoc>("User", UserSchema);
