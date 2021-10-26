import { GET_FOOD_LIST } from "./food.type";

const INITIAL_STATE = {
  foodList: [],
};

const FoodReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_FOOD_LIST:
      return {
        ...state,
        foodList: action.payload,
      };
    default:
      return { ...state };
  }
};

export default FoodReducer;
