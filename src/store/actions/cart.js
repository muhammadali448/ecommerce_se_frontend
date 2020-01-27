import { SET_CART, SET_ERRORS } from "../types";
import { BASE_URL, clearErrors } from "./admin";
import { addOrder } from "./order";
import axios from "axios";
export const addToCart = (item, next) => dispatch => {
  let cart = [];
  if (typeof window !== "undefined") {
    if (localStorage.getItem("cart")) {
      cart = JSON.parse(localStorage.getItem("cart"));
    }
    cart.push({ ...item, count: 1 });

    // removes the duplicates product
    cart = Array.from(new Set(cart.map(p => p._id))).map(id => {
      return cart.find(p => p._id === id);
    });

    localStorage.setItem("cart", JSON.stringify(cart));
    dispatch({
      type: SET_CART,
      payload: cart
    });
    next();
  }
};

export const pay = (data, order, cb) => async (dispatch, store) => {
  try {
    const res = await axios.post(
      `${BASE_URL}/payment/braintree/checkout/${store().user._id}`,
      data,
      {
        headers: {
          Authorization: localStorage.getItem("token")
        }
      }
    );
    if (res.data.success) {
      dispatch(
        addOrder({
          ...order,
          transaction_id: res.data.transaction.id,
          amount: res.data.transaction.amount
        })
      );
      localStorage.removeItem("cart");
      dispatch({
        type: SET_CART,
        payload: []
      });
      dispatch(clearErrors());
      cb();
    }
  } catch (error) {
    dispatch({
      type: SET_ERRORS,
      payload: error.response.data
    });
  }
};

export const updateItem = (count, productId) => dispatch => {
  let cart = [];
  if (typeof window !== "undefined") {
    if (localStorage.getItem("cart")) {
      cart = JSON.parse(localStorage.getItem("cart"));
    }
    cart = cart.map(p => (p._id === productId ? { ...p, count } : p));
    localStorage.setItem("cart", JSON.stringify(cart));
    dispatch({
      type: SET_CART,
      payload: cart
    });
  }
};

export const removeItem = productId => dispatch => {
  let cart = [];
  if (typeof window !== "undefined") {
    if (localStorage.getItem("cart")) {
      cart = JSON.parse(localStorage.getItem("cart"));
    }
    cart = cart.filter(p => p._id !== productId);
    localStorage.setItem("cart", JSON.stringify(cart));
    dispatch({
      type: SET_CART,
      payload: cart
    });
  }
};

export const getCart = () => dispatch => {
  if (typeof window !== "undefined") {
    if (localStorage.getItem("cart")) {
      dispatch({
        type: SET_CART,
        payload: JSON.parse(localStorage.getItem("cart"))
      });
    }
  }
};
