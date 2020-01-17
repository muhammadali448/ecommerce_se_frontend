import React, { Fragment } from "react";
import { PageDetails } from "../PageDetails";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import useStyles from "./styles";
import { AdminLinks } from "../../common/AdminLinks";

export function AdminDashboard({ user }) {
  const classes = useStyles();
  const { name, email } = user;

  const UserInfo = () => (
    <Card className={classes.card} variant="outlined">
      <CardContent>
        <Typography
          className={classes.title}
          component="h1"
          variant="h1"
          gutterBottom
        >
          User Information
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Name: {name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Email: {email}
        </Typography>
      </CardContent>
    </Card>
  );

  return (
    <Fragment>
      <PageDetails title="Dashboard" description={`Good day, ${name}`} />

      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={3}>
          <Grid item md={3} lg={3}>
            <Paper>{<AdminLinks />}</Paper>
          </Grid>
          <Grid item md={9} lg={9}>
            <Fragment>{UserInfo()}</Fragment>
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  );
}
