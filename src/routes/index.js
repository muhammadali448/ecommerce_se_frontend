import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HomeContainer } from "../containers/HomeContainer";
import LoginContainer from "../containers/LoginContainer";
import SignupContainer from "../containers/SignupContainer/";
import MenuContainer from "../containers/MenuContainer";
import AuthRoute from "./AuthRoute";
import UserDashboardContainer from "../containers/UserDashboardContainer";
export const AppRoutes = () => (
  <Router>
    <div className="container">
      <MenuContainer />
      <Switch>
        <Route exact path="/" component={HomeContainer} />
        <Route exact path="/login" component={LoginContainer} />
        <Route exact path="/signup" component={SignupContainer} />
        <AuthRoute exact path="/userDashboard" component={UserDashboardContainer} />
      </Switch>
    </div>
  </Router>
);
