// Libraries
import express from "express";
import passport from "passport";

// Database modal
import { UserModel } from "../../database/allModels";

// validation
import { ValidateUserId } from "../../validation/user";
import { ValidateSignup } from "../../validation/auth";

const Router = express.Router();

/*
Route     /
Des       Get user data with id
Params    _id
BODY      none
Access    Public
Method    GET  
*/
Router.get("/:_id", async (req, res) => {
  try {
    const user = UserModel.findById(req.params._id);
    const { fullname } = user;

    return res.json({ user: { fullname } });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/*
Route     /
Des       Get user data
Params    none
BODY      none
Access    Public
Method    GET  
*/
Router.get("/", passport.authenticate("jwt"), async (req, res) => {
  try {
    const { email, fullname, phoneNumber, address } =
      req.session.passport.user._doc;

    return res.json({ user: { email, fullname, phoneNumber, address } });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/*
Route     /update
Des       update user id
Params    _id
BODY      user data
Access    Public
Method    PUT  
*/
Router.put("/update/:userId", async (req, res) => {
  try {
    await ValidateUserId(req.params);
    await ValidateSignup(req.body);
    const { userId } = req.params;
    const { userData } = req.body;
    const updateUserData = await UserModel.findByIdAndUpdate(
      userId,
      {
        $set: userData,
      },
      { new: true }
    );

    return res.json({ user: updateUserData });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;
