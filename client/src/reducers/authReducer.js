const initialState = {
  payload: [],
  isLoading: false,
  error: {}
};

export default (state = initialState, { type, payload, error }) => {
  switch (type) {
    case "FETCH_USER":
      return { ...state, isLoading: true };

    case "FETCH_USER_SUCCESS":
      return { ...state, payload: payload || false, isLoading: false };

    case "FETCH_USER_FAILURE":
      return { ...state, error: error, isLoading: false };

    default:
      return state;
  }
};
