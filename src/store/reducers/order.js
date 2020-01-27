import { SET_ORDERS, SET_ORDER, DELETE_ORDER, ADD_ORDER } from "../types";

const INITIAL_STATE = {
  orders: [],
  order: {},
  loading: false
};

export const orderReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_ORDERS:
      return {
        ...state,
        orders: action.payload,
        loading: false
      };
    case SET_ORDER:
      return {
        ...state,
        order: action.payload
      };
    case DELETE_ORDER:
      return {
        ...state,
        orders: state.orders.filter(order => order._id !== action.payload)
      };
    case ADD_ORDER:
      return {
        ...state,
        orders: [action.payload, ...state.orders]
      };
    default:
      return state;
  }
};
