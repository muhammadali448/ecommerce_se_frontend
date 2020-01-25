import React, { useEffect, useState, Fragment, useRef } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import useStyles from "./styles";
import ProductCartView from "../../common/ProductCartView";
import Button from "@material-ui/core/Button";
import DropIn from "braintree-web-drop-in-react";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../store/actions/admin";
import axios from "axios";

const ButtonLink = props => {
  return (
    <Button variant="contained" color="primary" component={Link} {...props} />
  );
};

export default function Cart({
  authenticated,
  userId,
  cart,
  getCart,
  removeItem,
  updateItem
}) {
  const classes = useStyles();
  let Instance = useRef({});
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState(null);

  useEffect(() => {
    getCart();
  }, [getCart]);

  const handleTotal = () =>
    cart.cart.reduce((current, next) => {
      return current + next.count * next.price;
    }, 0);

  const handleBuy = async () => {
    // Send the nonce to your server
    try {
      const { nonce } = await Instance.requestPaymentMethod();
      console.log("---total: ", nonce, handleTotal());
      /* const res = await axios.get(
        `${BASE_URL}/payment/braintree/getToken/${userId}`,
        {
          headers: {
            Authorization: localStorage.getItem("token")
          }
        }
      ); */
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `${BASE_URL}/payment/braintree/getToken/${userId}`,
        {
          headers: {
            Authorization: localStorage.getItem("token")
          }
        }
      );
      setToken(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
  };

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
              <Fragment>
                {!token && cart.cart.length > 0 && (
                  <div className={classes.wrapper}>
                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.buttonSuccess}
                      disabled={loading}
                      onClick={handleCheckout}
                    >
                      Proceed to checkout
                    </Button>
                    {loading && (
                      <CircularProgress
                        size={24}
                        className={classes.buttonProgress}
                      />
                    )}
                  </div>
                )}
                {token && cart.cart.length > 0 && (
                  <div className={classes.checkout}>
                    <DropIn
                      options={{ authorization: token }}
                      onInstance={instance => (Instance = instance)}
                    />
                    <Button
                      className={classes.buy}
                      size="large"
                      variant="contained"
                      onClick={handleBuy}
                      color="primary"
                    >
                      Buy
                    </Button>
                  </div>
                )}
              </Fragment>
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
