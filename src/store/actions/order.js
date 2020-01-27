import { LOADING_UI, SET_ERRORS, ADD_ORDER, SET_ORDERS } from "../types";
import { clearErrors } from "./admin";
import axios from "axios";

export const BASE_URL = "http://localhost:8000/api";
export const addOrder = data => async (dispatch, store) => {
  dispatch({
    type: LOADING_UI
  });
  try {
    const res = await axios.post(
      `${BASE_URL}/order/create/${store().user._id}`,
      data
    );
    dispatch({ type: ADD_ORDER, payload: res.data });
    dispatch(clearErrors());
  } catch (error) {
    dispatch({
      type: SET_ERRORS,
      payload: error.response.data
    });
  }
};

export const getOrders = () => async (dispatch, store) => {
  dispatch({
    type: LOADING_UI
  });
  try {
    const res = await axios.get(`${BASE_URL}/order/list/${store().user._id}`);
    dispatch({ type: SET_ORDERS, payload: res.data });
    dispatch(clearErrors());
  } catch (error) {
    dispatch({
      type: SET_ERRORS,
      payload: error.response.data
    });
  }
};
