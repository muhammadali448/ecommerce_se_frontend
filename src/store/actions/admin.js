import {
  LOADING_UI,
  CLEAR_ERRORS,
  SET_ERRORS,
  ADD_CATEGORY,
  ADD_PRODUCT,
  SET_CATEGORIES,
  SET_PRODUCTS
} from "../types";
import { reset } from "redux-form";
import axios from "axios";

const BASE_URL = "http://localhost:8000/api";

export const addCategory = data => async (dispatch, store) => {
  dispatch({
    type: LOADING_UI
  });
  try {
    const res = await axios.post(
      `${BASE_URL}/category/create/${store().user._id}`,
      data
    );
    dispatch({ type: ADD_CATEGORY, payload: res.data });
    dispatch(clearErrors());
  } catch (error) {
    dispatch({
      type: SET_ERRORS,
      payload: error.response.data
    });
  }
};

export const getProducts = () => async (dispatch, store) => {
  dispatch({
    type: LOADING_UI
  });
  try {
    const res = await axios.get(`${BASE_URL}/product/getAll`);
    dispatch({ type: SET_PRODUCTS, payload: res.data });
    dispatch(clearErrors());
  } catch (error) {
    dispatch({
      type: SET_ERRORS,
      payload: error.response.data
    });
  }
};

export const getCategories = () => async (dispatch, store) => {
  dispatch({
    type: LOADING_UI
  });
  try {
    const res = await axios.get(`${BASE_URL}/category/list`);
    dispatch({ type: SET_CATEGORIES, payload: res.data });
    dispatch(clearErrors());
  } catch (error) {
    dispatch({
      type: SET_ERRORS,
      payload: error.response.data
    });
  }
};

export const addProduct = data => async (dispatch, store) => {
  dispatch({
    type: LOADING_UI
  });
  try {
    const res = await axios.post(
      `${BASE_URL}/product/create/${store().user._id}`,
      data
    );
    dispatch(reset("AdminCreateProductForm"));
    dispatch({ type: ADD_PRODUCT, payload: res.data.data });
    dispatch(clearErrors());
  } catch (error) {
    dispatch({
      type: SET_ERRORS,
      payload: error.response.data
    });
  }
};

export const clearErrors = () => dispatch => dispatch({ type: CLEAR_ERRORS });
