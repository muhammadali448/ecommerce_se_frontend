import {
  LOADING_UI,
  CLEAR_ERRORS,
  SET_ERRORS,
  ADD_CATEGORY,
  ADD_PRODUCT,
  SET_CATEGORIES,
  SET_PRODUCTS_BY_ARRIVAL,
  SET_PRODUCTS_BY_SELL,
  SET_PRODUCTS_BY_CATEGORIES,
  SET_PRODUCTS,
  SET_PRODUCTS_BY_SEARCH,
  SET_PRODUCTS_PRICE_RANGES,
  SET_PRODUCT,
  SET_RELATED_PRODUCTS,
  PRODUCT_UPDATE,
  DELETE_PRODUCT
} from "../types";
import { reset } from "redux-form";
import axios from "axios";

export const BASE_URL = "http://localhost:8000/api";

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

export const getProductsPriceRanges = categoryId => async (dispatch, store) => {
  try {
    const res = await axios.get(`${BASE_URL}/product/getRanges/${categoryId}`);
    dispatch({
      type: SET_PRODUCTS_PRICE_RANGES,
      payload: res.data
    });
    dispatch(clearErrors());
  } catch (error) {
    dispatch({
      type: SET_ERRORS,
      payload: error.response.data
    });
  }
};

export const getProduct = productId => async (dispatch, store) => {
  try {
    const res = await axios.get(`${BASE_URL}/product/get/${productId}`);
    dispatch({
      type: SET_PRODUCT,
      payload: { ...res.data }
    });
    dispatch(clearErrors());
  } catch (error) {
    dispatch({
      type: SET_ERRORS,
      payload: error.response.data
    });
  }
};

export const getRelatedProducts = productId => async (dispatch, store) => {
  try {
    const res = await axios.get(
      `${BASE_URL}/product/list/related/${productId}`
    );
    dispatch({
      type: SET_RELATED_PRODUCTS,
      payload: res.data
    });
    dispatch(clearErrors());
  } catch (error) {
    dispatch({
      type: SET_ERRORS,
      payload: error.response.data
    });
  }
};

export const searchProducts = data => async (dispatch, store) => {
  try {
    const res = await axios.get(
      `${BASE_URL}/product/search/?search=${data.search}&category=${data.category}`
    );
    dispatch({
      type: SET_PRODUCTS_BY_SEARCH,
      payload: res.data
    });
    dispatch(clearErrors());
  } catch (error) {
    dispatch({
      type: SET_ERRORS,
      payload: error.response.data
    });
  }
};

export const getProductsBySearch = (filters, page = 1) => async (
  dispatch,
  store
) => {
  try {
    const res = await axios.post(`${BASE_URL}/product/list/search/products`, {
      sortBy: "price",
      page,
      filters
    });
    dispatch({
      type: SET_PRODUCTS_BY_CATEGORIES,
      payload: { ...res.data }
    });
    dispatch(clearErrors());
  } catch (error) {
    dispatch({
      type: SET_ERRORS,
      payload: error.response.data
    });
  }
};

export const getProductsByFilters = (
  sortBy,
  order = "desc",
  limit = 8
) => async (dispatch, store) => {
  dispatch({
    type: LOADING_UI
  });
  try {
    const res = await axios.get(
      `${BASE_URL}/product/list?sortBy=${sortBy}&order=${order}&limit=${limit}`
    );
    if (sortBy === "createdAt") {
      dispatch({ type: SET_PRODUCTS_BY_ARRIVAL, payload: res.data });
    }
    if (sortBy === "sold") {
      dispatch({ type: SET_PRODUCTS_BY_SELL, payload: res.data });
    }
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

export const deleteProduct = (productId, cb) => async (dispatch, store) => {
  console.log("insert");
  try {
    await axios.delete(
      `${BASE_URL}/product/delete/${productId}/${store().user._id}`
    );
    dispatch({ type: DELETE_PRODUCT, payload: productId });
    dispatch(clearErrors());
    cb(true);
  } catch (error) {
    console.log("error delete: ", error.message);
    dispatch({
      type: SET_ERRORS,
      payload: error.response.data
    });
    cb(false);
  }
};

export const updateProduct = (data, productId, cb) => async (
  dispatch,
  store
) => {
  try {
    var body = new FormData();
    Object.keys(data).forEach(key => {
      body.append(key, data[key]);
    });

    const res = await axios.put(
      `${BASE_URL}/product/update/${productId}/${store().user._id}`,
      body
    );
    dispatch({ type: PRODUCT_UPDATE, payload: res.data.data });
    dispatch(clearErrors());
    cb(true);
  } catch (error) {
    console.log("error update: ", error.message);
    dispatch({
      type: SET_ERRORS,
      payload: error.response.data
    });
    cb(false);
  }
};

export const clearErrors = () => dispatch => dispatch({ type: CLEAR_ERRORS });
