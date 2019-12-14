import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
const AuthRoute = ({ component: Component, authenticated, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      authenticated ? <Redirect to="/" /> : <Component {...props} />
    }
  />
);

AuthRoute.propTypes = {
  authenticated: PropTypes.bool.isRequired
};

const mapStateToProps = ({ user: { authenticated } }) => ({
  authenticated
});

export default connect(mapStateToProps)(AuthRoute);
