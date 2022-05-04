import { useReducer } from "react";
import authReducer from "./reducers";
import AuthContext from "./context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Baseurl from "../../utils/baseUrl";
import axios from "axios";
import setAuthToken from "../../utils/setAutoken";
import { Linking } from "react-native";

import {
  SIGNIN,
  SIGNOUT,
  SIGNIN_ERROR,
  LOAD_USER,
  LOAD_USER_ERROR,
} from "./actions";

const AuthState = ({ children }) => {
  const initialState = {
    token: async () => {
      await AsyncStorage.getItem("@Auth_key");
    },
    isAuthenticated: false,
    user: null,
    signinError: null,
    signinLoading: false,
    isRefreshing: false,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  //Persist Login and Load User
  const persitLogin = async () => {
    let token = await AsyncStorage.getItem("@Auth_key");
    if (token !== null) {
      setAuthToken(token);
      try {
        let res = await axios.get(`${Baseurl.Uri}auth`);
        // console.log(res.data);
        const { data } = res.data;
        dispatch({
          type: LOAD_USER,
          payload: data,
        });
      } catch (error) {
        const { data } = error.response;
        await AsyncStorage.removeItem("@Auth_key");
        dispatch({
          type: LOAD_USER_ERROR,
          payload: data.msg,
        });
      }
    } else {
      await AsyncStorage.removeItem("@Auth_key");
      dispatch({
        type: LOAD_USER_ERROR,
        payload: "Unauthorized",
      });
    }
  };

  //Sign In
  const signIn = async (values) => {
    let config = {
      contentType: "application/json",
    };
    try {
      let res = await axios.post(`${Baseurl.Uri}auth`, values, config);
      const { data } = res.data;
      await AsyncStorage.setItem("@Auth_key", data);
      dispatch({
        type: SIGNIN,
        payload: data,
      });
      persitLogin();
    } catch (error) {
      await AsyncStorage.removeItem("@Auth_key");
      const { status, data } = error.response;
      dispatch({
        type: SIGNIN_ERROR,
        payload: status === 429 ? "Too Many SignIn Attempts" : data.msg,
      });
    }
  };

  // Google Sign In
  const googleSignIn = async () => {
    try {
      let res = await axios.post(`${Baseurl.Uri}generateurl`);
      const { data } = res.data;
      // let isSupported = await Linking.canOpenURL(data);
      // if (isSupported) {
      //   await Linking.openURL(data);

      // }
      console.log(data);
    } catch (error) {}
  };

  const signOut = async () => {
    try {
      await AsyncStorage.removeItem("@Auth_key");
      dispatch({
        type: SIGNOUT,
      });
    } catch (error) {}
  };

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isAuthenticated: state.isAuthenticated,
        signIn,
        googleSignIn,
        persitLogin,
        signOut,
        signinError: state.signinError,
        signinLoading: state.signinLoading,
        isRefreshing: state.isRefreshing,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthState;
