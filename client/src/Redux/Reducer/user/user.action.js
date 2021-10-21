import axios from "axios";

import { GET_USER, AUTH_USER } from "./user.type";

// this function returns an async function which makes the api call in an asynchronous manner
export const getUser = (_id) => async (dispatch) => {
  try {
    const user = await axios({
      method: "GET",
      url: `http://localhost:4000/user/${_id}`,
    });

    return dispatch({ payload: user.data });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
};
export const getCurrentUser = () => async (dispatch) => {
  try {
    const user = await axios({
      method: "GET",
      url: `http://localhost:4000/user/`,
    });

    return dispatch({ type: GET_USER, payload: user.data });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
};

// export const authUser = () => async (dispatch) => {
//   try {
//     const user = await axios({
//       method: "GET",
//       url: `http://localhost:4000/user/${_id}`,
//     });

//     return dispatch({ type: GET_USER, payload: user.data });
//   } catch (error) {
//     return dispatch({ type: "ERROR", payload: error });
//   }
// };
