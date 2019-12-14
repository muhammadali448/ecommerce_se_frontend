import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../containers/HomeContainer";
import Login from "../containers/LoginContainer";
import Signup from "../containers/SignupContainer";

const AppRoutes = () => (
  <Router>
    <div className="container">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
      </Switch>
    </div>
  </Router>
);

export default AppRoutes;
