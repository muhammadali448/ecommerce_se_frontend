import React, { Fragment } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import useStyles from "./styles";

export function UserDashboard({ user }) {
  const classes = useStyles();
  const { name, email } = user;

  return (
    <Fragment>
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
      <Card className={classes.card} variant="outlined">
        <CardContent>
          <Typography
            className={classes.title}
            component="h1"
            variant="h1"
            gutterBottom
          >
            History
          </Typography>
        </CardContent>
      </Card>
    </Fragment>
  );
}
