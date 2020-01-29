import {
  LOADING_UI,
  SET_ERRORS,
  ADD_ORDER,
  SET_ORDERS,
  UPDATE_STATUS_VALUE,
  SET_STATUS_VALUES
} from "../types";
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

export const getStatusValues = () => async (dispatch, store) => {
  try {
    const res = await axios.get(
      `${BASE_URL}/order/list/statusValues/${store().user._id}`
    );
    dispatch({ type: SET_STATUS_VALUES, payload: res.data });
    dispatch(clearErrors());
  } catch (error) {
    dispatch({
      type: SET_ERRORS,
      payload: error.response.data
    });
  }
};
//
export const updateStatusValue = (orderId, status) => async (
  dispatch,
  store
) => {
  try {
    const res = await axios.put(
      `${BASE_URL}/order/statusValue/${store().user._id}/update/${orderId}`,
      { status }
    );
    dispatch({ type: UPDATE_STATUS_VALUE, payload: res.data });
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

export const getOrdersPurchaseHistory = cb => async (dispatch, store) => {
  try {
    const res = await axios.get(
      `${BASE_URL}/user/order/history/${store().user._id}`
    );
    dispatch({ type: SET_ORDERS, payload: res.data });
    dispatch(clearErrors());
    cb();
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: SET_ERRORS,
      payload: error.response.data
    });
  }
};
