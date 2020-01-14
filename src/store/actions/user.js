import {
  SET_USER,
  LOADING_UI,
  CLEAR_ERRORS,
  SET_ERRORS,
  SET_UNAUTHENTICATED,
  LOADING_USER
} from "../types";
import axios from "axios";

const BASE_URL = "http://localhost:8000/api";

export const loginUser = (userData, history) => async dispatch => {
  dispatch({
    type: LOADING_UI
  });
  try {
    const res = await axios.post(`${BASE_URL}/auth/signin`, userData);
    const token = `Bearer ${res.data.token}`;
    localStorage.setItem("token", token);
    localStorage.setItem("id", res.data.user._id);
    axios.defaults.headers.common["Authorization"] = token;
    dispatch(getUserData(res.data.user._id));
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
    await axios.get(`${BASE_URL}/auth/signout`);
    localStorage.removeItem("token");
    localStorage.removeItem("id");
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
    const res = await axios.post(`${BASE_URL}/auth/signup`, userData);
    // const token = `Bearer ${res.data.token}`;
    // localStorage.setItem("FBIdToken", token);
    // axios.defaults.headers.common["Authorization"] = token;
    // dispatch(getUserData());
    dispatch({ type: CLEAR_ERRORS });
    history.push("/login");
  } catch (error) {
    dispatch({
      type: SET_ERRORS,
      payload: error.response.data
    });
  }
};

export const getUserData = (userId) => async dispatch => {
  dispatch({ type: LOADING_USER });
  try {
    const res = await axios.get(`${BASE_URL}/user/${userId}`);
    dispatch({
      type: SET_USER,
      payload: res.data
    });
  } catch (error) {
    console.log(error);
  }
};
