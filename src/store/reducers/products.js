import {
  SET_PRODUCTS,
  ADD_PRODUCT,
  SET_PRODUCT,
  DELETE_PRODUCT,
  SET_PRODUCTS_BY_ARRIVAL,
  SET_PRODUCTS_BY_SELL,
  SET_PRODUCTS_BY_CATEGORIES,
  SET_PRODUCTS_PRICE_RANGES,
  SET_PRODUCTS_BY_SEARCH
} from "../types";

const INITIAL_STATE = {
  products: [],
  productsByArrival: [],
  productsBySell: [],
  searchProducts: [],
  productsByCategories: {},
  productsPriceRanges: [],
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
    case SET_PRODUCTS_PRICE_RANGES:
      return {
        ...state,
        productsPriceRanges: action.payload,
        loading: false
      };
    case SET_PRODUCTS_BY_SEARCH:
      return {
        ...state,
        searchProducts: action.payload,
        loading: false
      };
    case SET_PRODUCTS_BY_CATEGORIES:
      return {
        ...state,
        productsByCategories: action.payload,
        loading: false
      };
    case SET_PRODUCTS_BY_ARRIVAL:
      return {
        ...state,
        productsByArrival: action.payload,
        loading: false
      };
    case SET_PRODUCTS_BY_SELL:
      return {
        ...state,
        productsBySell: action.payload,
        loading: false
      };
    case SET_PRODUCT:
      return {
        ...state,
        product: action.payload,
        loading: false
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
