// libraries
import express from "express";
import { MenuModel, ImageModel } from "../../database/allModels";

// validation
import { ValidateMenuId } from "../../validation/menu";
import { ValidateImageId } from "../../validation/image";

const Router = express.Router();

/*
route               /list
description         get all lists of menu based on id
access              public
parameter           _id
methods             GET
*/

Router.get("/list/:_id", async (req, res) => {
  try {
    await ValidateMenuId(req.params);

    const { _id } = req.params;
    const menus = await MenuModel.findOne(_id);
    return res.json({ menus });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/*
route               /image
description         get all images of menu
access              public
parameter           _id
methods             GET
*/
Router.get("/image/:_id", async (req, res) => {
  try {
    await ValidateImageId(req.params);
    const { _id } = req.params;
    const menus = await ImageModel.findOne(_id);
    return res.json({ menus });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;
