import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import useStyles from "./styles";

export default function ProductShopCard({
  viewProduct,
  photo,
  name,
  description,
  price
}) {
  const classes = useStyles();
  console.log("--", name);
  return (
    <Card className={classes.card}>
      <CardMedia className={classes.cover} image={photo.url} title={name} />
      <CardContent className={classes.details}>
        <Typography
          gutterBottom
          variant={viewProduct ? "h4" : "body1"}
          color={viewProduct ? "inherit" : "primary"}
        >
          {name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
        <Typography variant="h6" color="textPrimary" component="p">
          Rs: {price}
        </Typography>
        <div className={classes.btns}>
          <Button variant="contained" size="large" color="primary">
            Add to cart
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
