import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullname: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String },
    address: [{ detail: { type: String }, for: { type: String } }],
    phoneNo: { type: Number },
  },
  {
    timestamps: true,
  }
);

export const UserModel = mongoose.model("Users", userSchema);
