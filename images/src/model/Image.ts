import mongoose from "mongoose";

interface ImageDoc extends mongoose.Document {
  url: string;
  name: string;
  description: string;
  uploadedBy: string;
}

const ImageSchema = new mongoose.Schema({
  url: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  uploadedBy: {
    type: String,
    require: true,
  },
});

export default mongoose.model<ImageDoc>("Image", ImageSchema);
