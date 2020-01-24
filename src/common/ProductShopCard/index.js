import React, { Fragment } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import useStyles from "./styles";
import { Link } from "react-router-dom";
import moment from "moment";

export default function ProductShopCard({
  id,
  viewProduct,
  photo,
  name,
  description,
  price,
  category,
  createdAt,
  quantity
}) {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardMedia className={classes.cover} image={photo.url} title={name} />
      <CardContent className={classes.details}>
        <Typography
          variant={viewProduct ? "h4" : "body1"}
          color={viewProduct ? "inherit" : "primary"}
        >
          {viewProduct ? (
            name
          ) : (
            <Link className={classes.name} to={`/view-product/${id}`}>
              {name}
            </Link>
          )}
        </Typography>
        {viewProduct && (
          <Fragment>
            <Typography variant="body2" color="textSecondary" component="small">
              Category: {category}
            </Typography>
            <Typography
              gutterBottom
              variant="body2"
              color="textSecondary"
              component="small"
            >
              Added On: {moment(createdAt).format("DD MMM, YYYY")}
            </Typography>
          </Fragment>
        )}
        <Typography variant="body1" color="textPrimary" component="p">
          {description}
        </Typography>
        <Typography
          variant="h6"
          color={quantity > 0 ? "primary" : "secondary"}
          component="p"
        >
          {quantity > 0 ? "In Stock" : "Out of Stock"}
        </Typography>
        <Typography variant="h6" color="textPrimary" component="p">
          Rs.{price}
        </Typography>
        <div className={classes.btns}>
          <Button
            variant="contained"
            size={viewProduct ? "large" : "small"}
            style={{ marginRight: 20 }}
            color="default"
          >
            Add to Wishlist
          </Button>
          {quantity > 0 && (
            <Button
              variant="contained"
              size={viewProduct ? "large" : "small"}
              color="primary"
            >
              Add to cart
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
