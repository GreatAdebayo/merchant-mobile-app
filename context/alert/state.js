import AlertContext from "./context";
import alertReducer from "./reducer";
import { SET_ALERT, REMOVE_ALERT } from "./actions";
import { useReducer } from "react";

const AlertState = (props) => {
  const initialState = [];
  const [state, dispatch] = useReducer(alertReducer, initialState);

  //setAlert
  const setAlert = (msg, type, timeout = 4000) => {
    const id = Math.random();
    dispatch({
      type: SET_ALERT,
      payload: { msg, type, id },
    });

    //removeAlert
    setTimeout(
      () =>
        dispatch({
          type: REMOVE_ALERT,
          payload: id,
        }),
      timeout
    );
  };
  return (
    <AlertContext.Provider
      value={{
        setAlert,
        alerts: state,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
