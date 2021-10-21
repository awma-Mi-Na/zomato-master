import { combineReducers } from "redux";

import restaurant from "./restaurant/restaurant.reducer";
import image from "./image/image.reducer";
import review from "./review/review.reducer";

const rootReducer = combineReducers({ restaurant, image, review });

export default rootReducer;
