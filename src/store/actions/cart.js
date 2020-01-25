import { SET_CART } from "../types";

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
