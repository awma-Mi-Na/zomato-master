import joi from "joi";

// export const ValidateRestaurantObject = (restaurantObj) => {
//   const Schema = joi.object({
//     name: joi.string().required(),
//     city: joi.string().required().min(3),
//     address: joi.string().required().min(5),
//     mapLocation: joi.string().required(),
//     cuisine: joi.array().items(joi.string()),
//     restaurantTimings: joi.string().min(3),
//     contactNumber: joi.number().min(7),
//     website: joi.string(),
//     popularDishes: joi.array().items(joi.string()),
//     averageCost: joi.number(),
//     amenities: joi.array().items(joi.string()),
//     menuImages: joi.string(),
//     menu: joi.string(),
//     reviews: joi.string(),
//     photos: joi.string(),
//   });
//   return Schema.validateAsync(restaurantObj);
// };

export const ValidateRestaurantCity = (restaurantObj) => {
  const Schema = joi.object({
    city: joi.string().required(),
  });
  return Schema.validateAsync(restaurantObj);
};

export const ValidateRestaurantSearchString = (restaurantObj) => {
  const Schema = joi.object({
    searchString: joi.string().required(),
  });
  return Schema.validateAsync(restaurantObj);
};
