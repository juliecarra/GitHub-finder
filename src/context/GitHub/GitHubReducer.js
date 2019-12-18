import {
  SEARCH_USER,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_USER_REPOS
} from "../actions/types";

export default (state, action) => {
  if (action.type === SET_LOADING) {
    return {
      ...state,
      loading: true
    };
  } else if (action.type === SEARCH_USER) {
    return {
      ...state,
      users: action.payload,
      loading: false
    };
  } else if (action.type === CLEAR_USERS) {
    return {
      ...state,
      users: [],
      loading: false
    };
  } else if (action.type === GET_USER) {
    return {
      ...state,
      user: action.payload,
      loading: false
    };
  } else if (action.type === GET_USER_REPOS) {
    return {
      ...state,
      repos: action.payload,
      loading: false
    };
  } else {
    return state;
  }
};
