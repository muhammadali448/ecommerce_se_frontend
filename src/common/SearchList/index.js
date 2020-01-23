import React, { Fragment } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import useStyles from "./styles";


export default function SearchList({ products }) {
  const classes = useStyles();
  // console.log("-products: ", products);
  return (
    <List className={classes.root}>
      {products.map((product, index) => (
        <Fragment key={product._id}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt={product.name}
                className={classes.photo}
                variant="square"
                src={product.photo.url}
              />
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography className={classes.heading} color="textPrimary">
                  {product.name}
                </Typography>
              }
              secondary={
                <React.Fragment>
                  <Typography
                    component="p"
                    variant="body2"
                    color="textSecondary"
                  >
                    {product.category.name}
                  </Typography>
                  <Typography
                    component="p"
                    variant="body2"
                    color="textSecondary"
                  >
                    Rs.{product.price}
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          {index !== products.length && <Divider />}
        </Fragment>
      ))}
    </List>
  );
}
