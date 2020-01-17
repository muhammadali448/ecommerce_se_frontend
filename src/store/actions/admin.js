import { LOADING_UI, CLEAR_ERRORS, SET_ERRORS, ADD_CATEGORY } from "../types";
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

export const clearErrors = () => dispatch => dispatch({ type: CLEAR_ERRORS });
