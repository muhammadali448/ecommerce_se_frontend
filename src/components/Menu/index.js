import React, { Fragment } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link, withRouter } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { useStyles } from "./styles";

const ListItemLink = props => {
  return <Button component={Link} {...props} />;
};

const isActive = (history, route) => {
  if (history.location.pathname === route) {
    return { color: "#ff9900" };
  } else {
    return {
      color: "#ffffff"
    };
  }
};

export const Menu = withRouter(({ history, authenticated, logout }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Ecommerce_SE
          </Typography>
          <ListItemLink color="inherit" style={isActive(history, "/")} to="/">
            Home
          </ListItemLink>
          {!authenticated ? (
            <Fragment>
              <ListItemLink
                color="inherit"
                style={isActive(history, "/login")}
                to="/login"
              >
                Login
              </ListItemLink>
              <ListItemLink
                color="inherit"
                style={isActive(history, "/signup")}
                to="/signup"
              >
                Signup
              </ListItemLink>
            </Fragment>
          ) : (
            <Fragment>
              <ListItemLink
                color="inherit"
                style={isActive(history, "/userDashboard")}
                to="/userDashboard"
              >
                Dashboard
              </ListItemLink>
              <Button color="inherit" onClick={() => logout()}>
                Logout
              </Button>
            </Fragment>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
});
