import React, { useEffect } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import useStyles from "./styles";
import ProductCartView from "../../common/ProductCartView";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const ButtonLink = props => {
  return (
    <Button variant="contained" color="primary" component={Link} {...props} />
  );
};

export default function Cart({
  authenticated,
  cart,
  getCart,
  removeItem,
  updateItem
}) {
  const classes = useStyles();
  useEffect(() => {
    getCart();
  }, [getCart]);

  const handleTotal = () =>
    cart.cart.reduce((current, next) => {
      return current + next.count * next.price;
    }, 0);

  return (
    <Container maxWidth="lg" className={classes.mt}>
      <Grid container spacing={1}>
        <Grid item md={9} lg={9}>
          <div className={classes.heading}>
            <h2>Shopping Cart</h2>
          </div>
          {cart.cart.length > 0 ? (
            cart.cart.map(product => (
              <ProductCartView
                key={product._id}
                removeItem={removeItem}
                product={product}
                updateItem={updateItem}
              />
            ))
          ) : (
            <div>No Products</div>
          )}
        </Grid>
        <Grid item md={3} lg={3}>
          <div className={classes.proceed}>
            <h2>
              Subtotal ({cart.cart.length} items):{" "}
              <span className={classes.price}>Rs.{handleTotal()}</span>
            </h2>
            {authenticated ? (
              <Button variant="contained" color="primary">
                Proceed to checkout
              </Button>
            ) : (
              <ButtonLink to="/login">Sign in to checkout</ButtonLink>
            )}
            <br />
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}
