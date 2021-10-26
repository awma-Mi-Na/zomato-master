// libraries
import express from "express";
import { FoodModel } from "../../database/allModels";

// validation
import { ValidateRestaurantId, ValidateCategory } from "../../validation/food";

const Router = express.Router();

/*
route               /
description         get food based on id
access              public
parameter           _id
methods             GET
*/

Router.get("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const food = await FoodModel.findById(_id);
    return res.json({ food });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});
/*
route               /r
description         get all food from a particular restaurant
access              public
parameter           _id
methods             GET
*/

Router.get("/r/:resID", async (req, res) => {
  try {
    await ValidateRestaurantId(req.params);
    const { _id } = req.params;
    const food = await FoodModel.find({ restaurant: resID });
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
    await ValidateCategory(req.params);
    const { category } = req.params;
    const food = await FoodModel.find({
      category: { $regex: category, $options: "i" },
    });
    return res.json({ food });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;
