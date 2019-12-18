import { SET_ALERT, REMOVE_ALERT } from "../actions/types";

export default (state, action) => {
  if (action.type === SET_ALERT) {
    return {
      alert: action.payload
    };
  } else if (action.type === REMOVE_ALERT) {
    return {
      ...state,
      alert: null
    };
  }
};
