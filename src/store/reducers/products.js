import {
    SET_PRODUCTS,
    ADD_PRODUCT,
    SET_PRODUCT,
    DELETE_PRODUCT
  } from "../types";
  
  const INITIAL_STATE = {
    products: [],
    product: {},
    loading: false
  };
  
  export const productReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case SET_PRODUCTS:
        return {
          ...state,
          products: action.payload,
          loading: false
        };
      case SET_PRODUCT:
        return {
          ...state,
          product: action.payload
        };
      case DELETE_PRODUCT:
        return {
          ...state,
          products: state.products.filter(
            product => product._id !== action.payload
          )
        };
      case ADD_PRODUCT:
        return {
          ...state,
          products: [action.payload, ...state.products]
        };
      default:
        return state;
    }
  };
  