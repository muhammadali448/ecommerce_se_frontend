import { SET_BRANDS, SET_BRAND, DELETE_BRAND, ADD_BRAND } from "../types";

const INITIAL_STATE = {
  brands: [],
  brand: {},
  loading: false
};

export const brandReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_BRANDS:
      return {
        ...state,
        brands: action.payload,
        loading: false
      };
    case SET_BRAND:
      return {
        ...state,
        brand: action.payload
      };
    case DELETE_BRAND:
      return {
        ...state,
        brands: state.brands.filter(brand => brand._id !== action.payload)
      };
    case ADD_BRAND:
      return {
        ...state,
        brands: [action.payload, ...state.brands]
      };
    default:
      return state;
  }
};
