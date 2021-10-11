import { OrderModel } from "../../database/allModels";
import express from "express";
import passport from "passport";

const Router = express.Router();

/*
route               /
description         get all orders based on id
access              private
parameter           _id
methods             GET
*/

Router.get(
  "/:_id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const { _id } = req.params;
      const getOrders = await OrderModel.findOne({ user: _id });

      if (!getOrders) return res.status(404).json({ error: "User not found" });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
);

/*
route               /new
description         add new order
access              public
parameter           _id
methods             POST
*/

Router.post("/new/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const { newOrderDetails } = req.body;
    const addNewOrder = OrderModel.findOneAndUpdate(
      { user: _id },
      {
        $push: { orderDetails: newOrderDetails },
      },
      {
        new: true,
      }
    );
    return res.json({ order: addNewOrder });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;
