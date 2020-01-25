import React, { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { getCart } from "../../helpers/cart";
import useStyles from "./styles";
import ProductCartView from "../../common/ProductCartView";
export default function Cart() {
  const [items, setItems] = useState([]);
  const [run, setRun] = useState(false);
  const classes = useStyles();
  useEffect(() => {
    setItems(getCart());
  }, [run]);

  const handleTotal = () =>
    items.reduce((current, next) => {
      return current + next.count * next.price;
    }, 0);

  return (
    <Container maxWidth="lg" className={classes.mt}>
      <Grid container spacing={1}>
        <Grid item md={9} lg={9}>
          <div className={classes.heading}>
            <h2>Shopping Cart</h2>
          </div>
          {items.length > 0 ? (
            items.map(product => (
              <ProductCartView
                key={product._id}
                product={product}
                setRun={setRun}
                run={run}
              />
            ))
          ) : (
            <div>No Products</div>
          )}
        </Grid>
        <Grid item md={3} lg={3}>
          <div className={classes.heading}>
            <h2>
              Subtotal ({items.length} items): Rs.{handleTotal()}
            </h2>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}
