import { Mongoose } from "mongoose";

const userSchema = new Mongoose.Schema({
  fullname: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String },
  address: [{ detail: { type: String }, for: { type: String } }],
  phoneNo: { type: Number },
});

export const UserModel = Mongoose.model("Users", userSchema);
