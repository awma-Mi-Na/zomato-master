import joi from "joi";

export const ValidateOrderId = (orderId) => {
  const Schema = joi.object({
    _id: joi.string().required().min(5),
  });
  return Schema.validateAsync(orderId);
};

export const ValidateNewOrder = (newOrder) => {
  const Schema = joi.object({
    user: joi.string().required(),
    orderdetails: joi.array().items({
      food: joi.string().required(),
      quantity: joi.number().required(),
      paymode: joi.string().required(),
      status: joi.string(),
      paymentDetails: joi.object({
        itemTotal: joi.number().required(),
        promo: joi.number().required(),
        tax: joi.number().required(),
      }),
    }),
    orderRatings: joi.number().required(),
  });
};
