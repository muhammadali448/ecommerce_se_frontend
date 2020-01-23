import React, { Fragment, useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link, withRouter } from "react-router-dom";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import CssBaseline from "@material-ui/core/CssBaseline";
import { useStyles } from "./styles";
import SearchList from "../../common/SearchList";

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

export const Menu = withRouter(
  ({ history, authenticated, admin, logout, product, searchProducts }) => {
    const classes = useStyles();
    const [search, setSearch] = useState("");

    const handleSearchChange = e => {
      setSearch(e.target.value);
      searchProducts(e.target.value)
    };

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Ecommerce_SE
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                onChange={handleSearchChange}
                value={search}
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
                inputProps={{ "aria-label": "search" }}
              />
              {search !== "" && product.searchProducts.length  > 0 && (
                <SearchList products={product.searchProducts} />
              )}
            </div>
            <ListItemLink color="inherit" style={isActive(history, "/")} to="/">
              Home
            </ListItemLink>
            <ListItemLink
              color="inherit"
              style={isActive(history, "/shop")}
              to="/shop"
            >
              Shop
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
                  style={isActive(
                    history,
                    admin ? "/adminDashboard" : "/userDashboard"
                  )}
                  to={admin ? "/adminDashboard" : "/userDashboard"}
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
  }
);
