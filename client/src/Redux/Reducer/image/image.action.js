import axios from "axios";

import { GET_IMAGE } from "./image.type";

// this function returns an async function which makes the api call in an asynchronous manner
export const getImage = (_id) => async (dispatch) => {
  try {
    const image = await axios({
      method: "GET",
      url: `http://localhost:4000/image/${_id}`,
    });

    return dispatch({ type: GET_IMAGE, payload: image.data });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
};
