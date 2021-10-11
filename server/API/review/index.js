// Libraries
import express from "express";

// Database modal
import { ReviewModel } from "../../database/allModels";

// validation
import { ValidateReviewId, ValidateNewReview } from "../../validation/review";

const Router = express.Router();

/*
Route     /new
Des       Add new food review/rating
Params    none
BODY      review object
Access    Public
Method    POST  
*/

Router.post("/new", async (req, res) => {
  try {
    await ValidateNewReview(req.body);
    const { reviewData } = req.body;

    await ReviewModel.create({ ...reviewData, user: _id });

    return res.json({ review: "Sucessfully Created Review." });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/*
Route     /delete
Des       delete a review/rating
Params    _id
BODY      none
Access    Public
Method    DELETE  
*/
Router.delete("/delete/:_id", async (req, res) => {
  try {
    await ValidateReviewId(req.params);
    const { _id } = req.params;

    await ReviewModel.findByIdAndDelete(_id);

    return res.json({ review: "Sucessfully Deleted the Review." });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;
