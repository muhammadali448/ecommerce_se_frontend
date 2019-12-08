import React, { Component } from "react";
import { Provider } from "react-redux";
import AppRoutes from "./routes";
import store from "./store/store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppRoutes />
      </Provider>
    );
  }
}

export default App;
