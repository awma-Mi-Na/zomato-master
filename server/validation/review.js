import joi from "joi";

export const ValidateReviewId = (orderId) => {
  const Schema = joi.object({
    _id: joi.string().required().min(5),
  });
  return Schema.validateAsync(orderId);
};

export const ValidateNewReview = (newRev) => {
  const Schema = joi.object({
    food: joi.string().required(),
    restaurant: joi.string().required(),
    user: joi.string().required(),
    rating: joi.number().required(),
    reviewText: joi.string().required(),
    isRestaurantReview: joi.boolean(),
    isFoodReview: joi.boolean(),
    photos: joi.string(),
  });
};
