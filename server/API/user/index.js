// Libraries
import express from "express";

// Database modal
import { UserModel } from "../../database/allModels";

// validation
import { ValidateUserId } from "../../validation/user";
import { ValidateSignup } from "../../validation/auth";

const Router = express.Router();

/*
Route     /
Des       Get user data
Params    _id
BODY      none
Access    Public
Method    GET  
*/
Router.get("/:_id", async (req, res) => {
  try {
    await ValidateUserId(req.params);
    const getUser = await UserModel.findById(req.params._id);

    return res.json({ user: getUser });
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
