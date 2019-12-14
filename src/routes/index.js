import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HomeContainer } from "../containers/HomeContainer";
import { LoginContainer } from "../containers/LoginContainer";
import { SignupContainer } from "../containers/SignupContainer";
import { Menu } from "../components/Menu";
export const AppRoutes = () => (
  <Router>
    <div className="container">
      <Menu />
      <Switch>
        <Route exact path="/" component={HomeContainer} />
        <Route exact path="/login" component={LoginContainer} />
        <Route exact path="/signup" component={SignupContainer} />
      </Switch>
    </div>
  </Router>
);
