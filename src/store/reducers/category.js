import {
  SET_CATEGORIES,
  ADD_CATEGORY,
  SET_CATEGORY,
  DELETE_CATEGORY
} from "../types";

const INITIAL_STATE = {
  categories: [],
  category: {},
  loading: false
};

export const categoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
        loading: false
      };
    case SET_CATEGORY:
      return {
        ...state,
        category: action.payload
      };
    case DELETE_CATEGORY:
      return {
        ...state,
        categories: state.categories.filter(
          category => category._id !== action.payload
        )
      };
    case ADD_CATEGORY:
      return {
        ...state,
        categories: [action.payload, ...state.categories]
      };
    default:
      return state;
  }
};
