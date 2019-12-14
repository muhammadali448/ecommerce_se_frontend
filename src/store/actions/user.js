import {
  SET_USER,
  LOADING_UI,
  CLEAR_ERRORS,
  SET_ERRORS,
  SET_UNAUTHENTICATED,
  LOADING_USER
} from "../types";
import axios from "axios";

export const loginUser = (userData, history) => async dispatch => {
  dispatch({
    type: LOADING_UI
  });
  try {
    const res = await axios.post("/auth/signin", userData);
    console.log(res.data);
    const token = `Bearer ${res.data.token}`;
    localStorage.setItem("token", token);
    axios.defaults.headers.common["Authorization"] = token;
    dispatch(getUserData());
    dispatch({ type: CLEAR_ERRORS });
    history.push("/");
  } catch (error) {
    dispatch({
      type: SET_ERRORS,
      payload: error.response.data
    });
  }
};

export const logoutUser = () => async dispatch => {
  try {
    const res = await axios.get("/auth/signout");
    localStorage.removeItem("token");
    delete axios.defaults.headers.common["Authorization"];
    dispatch({
      type: SET_UNAUTHENTICATED
    });
  } catch (error) {
    dispatch({
        type: SET_ERRORS,
        payload: error.response.data
      });
  }
};

export const signupUser = (userData, history) => async dispatch => {
  dispatch({
    type: LOADING_UI
  });
  try {
    const res = await axios.post("/auth/signup", userData);
    console.log(res.data);
    const token = `Bearer ${res.data.token}`;
    localStorage.setItem("FBIdToken", token);
    axios.defaults.headers.common["Authorization"] = token;
    dispatch(getUserData());
    dispatch({ type: CLEAR_ERRORS });
    history.push("/");
  } catch (error) {
    dispatch({
      type: SET_ERRORS,
      payload: error.response.data
    });
  }
};

export const getUserData = () => async dispatch => {
  dispatch({ type: LOADING_USER });
  try {
    const res = await axios.get("/user/authenticated");
    dispatch({
      type: SET_USER,
      payload: res.data
    });
  } catch (error) {
    console.log(error);
  }
};
