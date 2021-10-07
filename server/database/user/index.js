import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

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

userSchema.methods.generateJwtToken = function () {
  return jwt.sign({ user: this._id.toString() }, "ZomatoAPP");
};

userSchema.statics.findByEmailAndPhone = async ({ email, phoneNo }) => {
  // check whether email exist
  const checkUserByEmail = await UserModel.findOne({ email });
  const checkUserByPhone = await UserModel.findOne({ phoneNo });

  if (checkUserByEmail || checkUserByPhone) {
    throw new Error("User already exists!");
  }
  return false;
};

userSchema.pre("save", function (next) {
  const user = this;

  // password is modified
  if (!user.isModified("password")) return next();

  // generate bcrypt salt
  bcrypt.genSalt(8, (error, salt) => {
    if (error) return next(error);

    // hash the password
    bcrypt.hash(user.password, salt, (error, hash) => {
      if (error) return next(error);

      // assigning hashed password
      user.password = hash;
      return next();
    });
  });
});

export const UserModel = mongoose.model("Users", userSchema);
