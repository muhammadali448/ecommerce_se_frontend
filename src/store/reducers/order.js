import {
  SET_ORDERS,
  SET_ORDER,
  DELETE_ORDER,
  ADD_ORDER,
  SET_STATUS_VALUES,
  UPDATE_STATUS_VALUE
} from "../types";

const INITIAL_STATE = {
  orders: [],
  order: {},
  statusValues: [],
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
    case SET_STATUS_VALUES:
      return {
        ...state,
        statusValues: action.payload,
        loading: false
      };
    case UPDATE_STATUS_VALUE:
      return {
        ...state,
        orders: state.orders.map(order =>
          order._id === action.payload._id
            ? { ...order, status: action.payload.status }
            : order
        ),
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
