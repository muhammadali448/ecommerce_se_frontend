import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import useStyles from "./styles";
import { useHistory } from "react-router-dom";
export default function ProductCard({ product, viewProduct, addToCart }) {
  const classes = useStyles();
  const history = useHistory();
  const handleAddToCart = () => {
    addToCart(product, () => {
      history.push("/cart");
    });
  };

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={product.photo.url}
          title={product.name}
        />
        <CardContent>
          <Typography gutterBottom variant="body1" color="primary">
            {product.name.split("").slice(0, 46)}...
          </Typography>
          {!viewProduct && (
            <Typography variant="body2" color="textSecondary" component="p">
              {product.description.split("").slice(0, 80)}...
            </Typography>
          )}
          <Typography variant="h6" color="textPrimary" component="p">
            Rs: {product.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={() => history.push(`/view-product/${product._id}`)}
        >
          View Product
        </Button>
        <Button size="small" color="primary" onClick={handleAddToCart}>
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
}
