import React from "react";
import { Link, useHistory } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
export const AdminLinks = () => {
  const history = useHistory();
  const ListItemLink = props => {
    return <ListItem button component={Link} {...props} />;
  };

  const isActive = (history, route) => {
    if (history.location.pathname === route) {
      return { color: "#ffffff", backgroundColor: "blue" };
    } else {
      return {
        color: "black"
      };
    }
  };
  return (
    <List component="nav" aria-label="main mailbox folders">
      <ListItemLink
        color="inherit"
        style={isActive(history, "/admin/createCategory")}
        to="/admin/createCategory"
      >
        Create Category
      </ListItemLink>
      <ListItemLink
        color="inherit"
        style={isActive(history, "/admin/createBrand")}
        to="/admin/createBrand"
      >
        Create Brand
      </ListItemLink>
      <ListItemLink
        color="inherit"
        style={isActive(history, "/admin/createProduct")}
        to="/admin/createProduct"
      >
        Create Product
      </ListItemLink>
      <ListItemLink
        color="inherit"
        style={isActive(history, "/admin/orders")}
        to="/admin/orders"
      >
        Orders
      </ListItemLink>
    </List>
  );
};
