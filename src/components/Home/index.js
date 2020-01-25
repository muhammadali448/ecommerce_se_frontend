import React, { Component, Fragment } from "react";
import { PageDetails } from "../PageDetails";
import LinearProgress from "@material-ui/core/LinearProgress";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import clsx from "clsx";
import ProductCard from "../../common/ProductCard";
import styles from "./styles";
import { withStyles } from "@material-ui/core";
class Home extends Component {
  componentDidMount() {
    this.props.getProductsByFilters("createdAt");
    this.props.getProductsByFilters("sold");
  }

  render() {
    const { loading, errors, product, classes, addToCart } = this.props;
    return (
      <Fragment>
        <PageDetails
          title="Computer world"
          description="We provide you the best service, come home to quality"
        />
        <Container maxWidth="lg" className={classes.mt}>
          {loading ? (
            <LinearProgress />
          ) : (
            <Fragment>
              <Fragment>
                <div className={classes.heading}>
                  <h2>Feature Products</h2>
                </div>
                <Grid container spacing={3}>
                  {product.productsBySell.map(product => (
                    <Grid key={product._id} item md={3} lg={3}>
                      <ProductCard addToCart={addToCart} product={product} />
                    </Grid>
                  ))}
                </Grid>
              </Fragment>
              <Fragment>
                <div className={clsx(classes.heading, classes.mt)}>
                  <h2>New Arrivals</h2>
                </div>
                <Grid container spacing={3}>
                  {product.productsByArrival.map(product => (
                    <Grid key={product._id} item md={3} lg={3}>
                      <ProductCard addToCart={addToCart} product={product} />
                    </Grid>
                  ))}
                </Grid>
              </Fragment>
            </Fragment>
          )}
        </Container>
      </Fragment>
    );
  }
}

export default withStyles(styles)(Home);
