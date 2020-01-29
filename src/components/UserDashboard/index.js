import React, { Fragment, useEffect, useState } from "react";
import { PageDetails } from "../PageDetails";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import LinearProgress from "@material-ui/core/LinearProgress";
import UserLinks from "../../common/UserLinks";
import { PurchaseHistory } from "./PurchaseHistory";
import useStyles from "./styles";

export function UserDashboard({ user, order, getOrdersPurchaseHistory }) {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const { name } = user;

  useEffect(() => {
    setLoading(true);
    getOrdersPurchaseHistory(() => {
      setLoading(false);
    });
  }, [getOrdersPurchaseHistory]);

  return (
    <Fragment>
      <PageDetails title="Dashboard" description={`Good day, ${name}`} />
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={3}>
          <Grid item md={3} lg={3}>
            <Paper>
              <UserLinks />
            </Paper>
          </Grid>
          <Grid item md={9} lg={9}>
            {loading ? (
              <LinearProgress />
            ) : (
              <Fragment>
                <Typography
                  className={classes.mb}
                  variant="h4"
                  color="textSecondary"
                >
                  Total Orders: {order.orders.length}
                </Typography>
                {order.orders.length > 0 && (
                  <PurchaseHistory orders={order.orders} />
                )}
              </Fragment>
            )}
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  );
}
