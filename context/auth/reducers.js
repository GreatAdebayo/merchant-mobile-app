import {
  SIGNIN,
  SIGNOUT,
  SIGNIN_ERROR,
  LOAD_USER,
  LOAD_USER_ERROR,
} from "./actions";

const authReducers = (state, action) => {
  switch (action.type) {
    case SIGNIN:
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload,
        signinLoading: false,
        signinError: null,
      };
    case SIGNIN_ERROR:
      return {
        ...state,
        signinError: action.payload,
        isAuthenticated: false,
        token: null,
        signinLoading: false,
      };
    case SIGNOUT:
      return {
        ...state,
        isAuthenticated: false,
        token: null,
        user: null,
        signinLoading: false,
        signinError: null,
        isRefreshing: false,
      };
    case LOAD_USER:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
        signinLoading: false,
        signinError: null,
        isRefreshing: false,
      };
    case LOAD_USER_ERROR:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        signinLoading: false,
        signinError: action.payload,
        isRefreshing: false,
      };
    default:
      return state;
  }
};

export default authReducers;
