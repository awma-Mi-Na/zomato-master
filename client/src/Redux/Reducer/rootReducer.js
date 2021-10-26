import { combineReducers } from "redux";

import restaurant from "./restaurant/restaurant.reducer";
import image from "./image/image.reducer";
import review from "./review/review.reducer";
import user from "./user/user.reducer";
import food from "./food/food.reducer";

const rootReducer = combineReducers({ restaurant, image, review, user, food });

export default rootReducer;
