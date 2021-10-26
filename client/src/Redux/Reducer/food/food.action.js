import axios from "axios";

import { GET_FOOD_LIST } from "./food.type";

// this function returns an async function which makes the api call in an asynchronous manner
export const getFood = (foodID) => async (dispatch) => {
  try {
    const food = await axios({
      method: "GET",
      url: `http://localhost:4000/food/${foodID}`,
    });

    return dispatch({ type: "GET_FOOD", payload: food.data });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
};

export const getFoodList = (menuID) => async (dispatch) => {
  try {
    const menu = await axios({
      method: "GET",
      url: `http://localhost:4000/menu/list/${menuID}`,
    });

    return dispatch({ type: GET_FOOD_LIST, payload: menu.data });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
};
