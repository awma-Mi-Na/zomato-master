import joi from "joi";

export const ValidateMenuId = (menuId) => {
  const Schema = joi.object({
    _id: joi.string().required().min(5),
  });
  return Schema.validateAsync(menuId);
};
