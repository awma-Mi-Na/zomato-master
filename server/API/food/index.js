// libraries
import express from "express";
import { FoodModel } from "../../database/allModels";

const Router = express.Router();

/*
route               /r
description         get all food from a particular restaurant
access              public
parameter           _id
methods             GET
*/

Router.get("/r/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const food = FoodModel.find({ restaurant: _id });
    return res.json({ food });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/*
route               /r/c
description         get all food based on a category
access              public
parameter           category
methods             GET
*/

Router.get("/r/c/:category", async (req, res) => {
  try {
    const { category } = req.params;
    const food = FoodModel.find({
      category: { $regex: category, $options: "i" },
    });
    return res.json({ food });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;
