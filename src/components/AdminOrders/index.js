import React, { Fragment, useState, useEffect } from "react";
import { PageDetails } from "../PageDetails";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import LinearProgress from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";
import useStyles from "./styles";
import { AdminLinks } from "../../common/AdminLinks";
import { OrdersTable } from "./ordersTable";

export function AdminOrders({ loading, errors, getOrders, order }) {
  const classes = useStyles();
  useEffect(() => {
    getOrders();
  }, [getOrders]);
  return (
    <Fragment>
      <PageDetails title="Orders" description="Orders details" />
      <Container maxWidth="lg" className={classes.mt}>
        <Grid container spacing={3}>
          <Grid item md={3} lg={3}>
            <Paper>{<AdminLinks />}</Paper>
          </Grid>
          <Grid item md={9} lg={9}>
            <Fragment>
              <div className={classes.mt}>
                {loading ? (
                  <LinearProgress />
                ) : order.orders.length < 0 ? (
                  <div className={classes.noOrders}>
                    <Typography variant="h3" color="textSecondary">
                      No Orders
                    </Typography>
                  </div>
                ) : (
                  <Fragment>
                    <Typography
                      className={classes.mb}
                      variant="h4"
                      color="textSecondary"
                    >
                      Total Orders: {order.orders.length}
                    </Typography>
                    <OrdersTable orders={order.orders} />
                  </Fragment>
                )}
              </div>
            </Fragment>
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  );
}
