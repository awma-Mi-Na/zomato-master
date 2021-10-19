import axios from "axios";

import { GET_RESTAURANT } from "./restaurant.type";

// this function returns an async function which makes the api call in an asynchronous manner
export const getRestaurant = () => async (dispatch) => {
  try {
    const restaurantList = await axios({
      method: "GET",
      url: "http://localhost:4000/restaurant/?city=delhi",
    });

    return dispatch({ type: GET_RESTAURANT, payload: restaurantList.data });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
};
