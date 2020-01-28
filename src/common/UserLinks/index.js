import React from "react";
import { Link, useHistory } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

export default function UserLinks() {
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
        style={isActive(history, "/myCart")}
        to="/myCart"
      >
        My Cart
      </ListItemLink>
      <ListItemLink
        color="inherit"
        style={isActive(history, "/user/profileUpdate")}
        to="/user/profileUpdate"
      >
        Profile Update
      </ListItemLink>
    </List>
  );
}
