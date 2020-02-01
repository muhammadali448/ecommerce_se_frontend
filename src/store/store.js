import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import { uiReducer } from "./reducers/ui";
import { userReducer } from "./reducers/user";
import { categoryReducer } from "./reducers/category";
import { productReducer } from "./reducers/products";
import { cartReducer } from "./reducers/cart";
import { brandReducer } from "./reducers/brand";
import { orderReducer } from "./reducers/order";
import { SET_UNAUTHENTICATED } from "./types";
const initialState = {};
const middleware = [thunk];

const appReducer = combineReducers({
  /* your app’s top-level reducers */
  form: formReducer,
  user: userReducer,
  category: categoryReducer,
  cart: cartReducer,
  brand: brandReducer,
  product: productReducer,
  order: orderReducer,
  UI: uiReducer
});

const rootReducer = (state, action) => {
  if (action.type === SET_UNAUTHENTICATED) {
    state = undefined;
  }

  return appReducer(state, action);
};

// const reducers = combineReducers({
//   form: formReducer,
//   user: userReducer,
//   category: categoryReducer,
//   cart: cartReducer,
//   product: productReducer,
//   order: orderReducer,
//   UI: uiReducer
// });

export const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
