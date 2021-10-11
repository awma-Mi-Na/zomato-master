import joi from "joi";

export const ValidateImageId = (imageId) => {
  const Schema = joi.object({
    _id: joi.string().required().min(5),
  });
  return Schema.validateAsync(imageId);
};
