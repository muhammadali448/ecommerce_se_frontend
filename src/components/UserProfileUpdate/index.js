import React, { Fragment, useState } from "react";
import { PageDetails } from "../PageDetails";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import useStyles from "./styles";
import UserLinks from "../../common/UserLinks";
import Divider from "@material-ui/core/Divider";
import UpdatePassword from "./UpdatePassword";
import UpdateProfile from "./UpdateProfile";

export function UserProfileUpdate({ user, updateUserInfo, errors }) {
  const classes = useStyles();
  return (
    <Fragment>
      <PageDetails
        title="Profile Update"
        description="Here you can update your name, email and password"
      />

      <Container maxWidth="lg" className={classes.mt}>
        <Grid container spacing={3}>
          <Grid item md={3} lg={3}>
            <Paper>
              <UserLinks />
            </Paper>
          </Grid>
          <Grid item md={9} lg={9}>
            <Fragment>
              <UpdatePassword
                user={user}
                errors={errors}
                updateUserInfo={updateUserInfo}
              />
              <Divider />
              <UpdateProfile
                user={user}
                errors={errors}
                updateUserInfo={updateUserInfo}
              />
            </Fragment>
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  );
}
