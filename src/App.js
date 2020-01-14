import React, { Component } from "react";
import { Provider } from "react-redux";
import jwtDecode from "jwt-decode";
import axios from "axios";
import { AppRoutes } from "./routes";
import { SET_AUTHENTICATED } from "./store/types";
import { store } from "./store/store";
import { logoutUser, getUserData } from "./store/actions/user";
const token = localStorage.getItem("token");
const id = localStorage.getItem("id");
if (token) {
  const decodedToken = jwtDecode(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    store.dispatch(logoutUser());
    delete axios.defaults.headers.common["Authorization"];
    window.location.href = "/login";
  } else {
    axios.defaults.headers.common["Authorization"] = token;
    store.dispatch({ type: SET_AUTHENTICATED });
    store.dispatch(getUserData(id));
  }
}
export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppRoutes />
      </Provider>
    );
  }
}
