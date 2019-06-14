import Axios from "axios";
import _ from "lodash";

export const fetchUser = term => dispatch => _fetchUser(term, dispatch);

const _fetchUser = _.memoize(async (term, dispatch) => {
  dispatch({ type: "FETCH_USER" });

  try {
    const response = await Axios.get("/api/current_user");
    dispatch({
      type: "FETCH_USER_SUCCESS",
      payload: response.data
    });
  } catch (error) {
    dispatch({ type: "FETCH_USER_FAILURE", error });
  }
});

export const handleToken = token => async dispatch => {
  const response = await Axios.post("/api/stripe", token);

  dispatch({ type: "FETCH_USER_SUCCESS", payload: response.data });
};
