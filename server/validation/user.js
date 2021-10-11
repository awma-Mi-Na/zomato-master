import joi from "joi";

export const ValidateUserId = (userId) => {
  const Schema = joi.object({
    _id: joi.string().required().min(5),
  });
  return Schema.validateAsync(userId);
};
