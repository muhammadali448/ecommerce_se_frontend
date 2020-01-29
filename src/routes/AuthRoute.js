import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
const AdminRoute = ({ component: Component, ...rest }) => {
  const { authenticated, admin } = useSelector(
    ({ user: { authenticated, admin } }) => ({
      authenticated,
      admin
    })
  );
  return (
    <Route
      {...rest}
      render={props =>
        authenticated && admin === false ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
};

export default AdminRoute;
