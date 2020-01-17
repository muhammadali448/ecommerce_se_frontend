import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import { uiReducer } from "./reducers/ui";
import { userReducer } from "./reducers/user";
import { categoryReducer } from "./reducers/category";
const initialState = {};
const middleware = [thunk];
const reducers = combineReducers({
  form: formReducer,
  user: userReducer,
  category: categoryReducer,
  UI: uiReducer
});

export const store = createStore(
  reducers,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
