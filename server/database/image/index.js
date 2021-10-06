import { Mongoose } from "mongoose";

const imageSchema = new Mongoose.Schema(
  {
    images: [
      {
        location: { type: String, require: true },
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const ImageModel = Mongoose.model("Images", imageSchema);
