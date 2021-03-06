import { RestaurantModel } from "../../database/allModels";
import express from "express";

// validation
import {
  ValidateRestaurantCity,
  ValidateRestaurantSearchString,
} from "../../validation/restaurant";

import { ValidateRestaurantId } from "../../validation/food";

const Router = express.Router();

/*
route               /
description         get all restaurant details
access              public
parameter           none
*/

Router.get("/", async (req, res) => {
  try {
    await ValidateRestaurantCity(req.query);

    const { city } = req.query;
    const restaurants = await RestaurantModel.find({ city });
    return res.json({ restaurants });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/*
route               /id/
description         get specific restaurant details with id
access              public
parameter           _id
methods             GET
*/

Router.get("/id/:_id", async (req, res) => {
  try {
    await ValidateRestaurantId(req.params);

    const { _id } = req.params;
    const restaurant = await RestaurantModel.findById(_id);

    if (!restaurant)
      return res.status(404).json({ error: "Restaurant not found" });

    return res.json({ restaurant });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/*
route               /search
description         get restaurant details by search
access              public
parameter           none
body                searchString
methods             GET
*/
Router.get("/search", async (req, res) => {
  try {
    await ValidateRestaurantSearchString(req.body);

    const { searchString } = req.body;

    const restaurants = await RestaurantModel.find({
      name: { $regex: searchString, $options: "i" },
    });
    if (!restaurants)
      return res
        .status(404)
        .json({ error: `No Restaurant matched with ${searchString}` });
    return res.json({ restaurants });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;
