import React, { Fragment } from "react";
import { PageDetails } from "../PageDetails";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { Link, useHistory } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import useStyles from "./styles";

export function AdminDashboard({ user }) {
  const classes = useStyles();
  const history = useHistory();
  const { name, email } = user;
  const ListItemLink = props => {
    return <ListItem button component={Link} {...props} />;
  };

  const isActive = (history, route) => {
    if (history.location.pathname === route) {
      return { color: "#ffffff", backgroundColor: "blue" };
    } else {
      return {
        color: "black"
      };
    }
  };

  const AdminLinks = () => (
    <List component="nav" aria-label="main mailbox folders">
      <ListItemLink
        color="inherit"
        style={isActive(history, "/admin/createCategory")}
        to="/admin/createCategory"
      >
        Create Category
      </ListItemLink>
      <ListItemLink
        color="inherit"
        style={isActive(history, "/admin/createProduct")}
        to="/admin/createProduct"
      >
        Create Product
      </ListItemLink>
    </List>
  );

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
            <Paper>{AdminLinks()}</Paper>
          </Grid>
          <Grid item md={9} lg={9}>
            <Fragment>{UserInfo()}</Fragment>
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  );
}
