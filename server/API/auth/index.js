// library
import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// models
import { UserModel } from "../../database/user";

const Router = express.Router();

/*
route               /signup
description         signup with email and password
access              public
parameter           none
methods             POST
*/
Router.post("/signup", async (req, res) => {
  try {
    const { email, password, fullname, phoneNo } = req.body.credentials;

    // check whether email exist
    const checkUserByEmail = await UserModel.findOne({ email });
    const checkUserByPhone = await UserModel.findOne({ phoneNo });

    if (checkUserByEmail || checkUserByPhone) {
      return res.json({ error: "user already exists!" });
    }

    // hash the password
    const bcryptSalt = await bcrypt.genSalt(8);

    const hashedPassword = await bcrypt.hash(password, bcryptSalt);

    // save to DB
    UserModel.create({
      ...req.body.credentials,
      password: hashedPassword,
    });
    // generate JWT auth token
    const token = jwt.sign({ user: { email, fullname } }, "ZomatoAPP");

    // return
    return res.status(200).json({ token, status: "success" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;
