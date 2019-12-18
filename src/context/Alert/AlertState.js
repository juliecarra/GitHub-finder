import React, { useReducer } from "react";
import { SET_ALERT, REMOVE_ALERT } from "../actions/types";

import AlertContext from "./AlertContext";
import AlertReducer from "./AlertReducer";

const AlertState = props => {
  const initialState = {
    alert: null
  };
  const [state, dispatch] = useReducer(AlertReducer, initialState);

  //Set Alert
  const setAlert = message => {
    dispatch({ type: SET_ALERT, payload: { message } });
    setTimeout(() => {
      dispatch({ type: REMOVE_ALERT });
    }, 7000);
  };

  //Provider
  return (
    <AlertContext.Provider
      value={{
        alert: state.alert,
        setAlert
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
