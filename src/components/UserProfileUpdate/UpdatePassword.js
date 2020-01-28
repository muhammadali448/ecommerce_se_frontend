import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import useStyles from "./styles";

export default function UpdateProfile({ user, errors, updateUserInfo }) {
  const classes = useStyles();
  const [values, setValues] = useState({
    currentPassword: "",
    newPassword: ""
  });
  const onHandleSubmit = e => {
    e.preventDefault();
    const { currentPassword, newPassword } = values;
    updateUserInfo({
      currentPassword,
      newPassword,
      name: user.name,
      email: user.email
    });
  };
  const handleChange = (e, type) => {
    setValues({ ...values, [type]: e.target.value });
  };
  return (
    <div className={classes.profileUpdate}>
      <Typography className={classes.title} variant="body2">
        Update Password
      </Typography>
      <form className={classes.form} onSubmit={onHandleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={6}>
            <FormControl margin="normal" fullWidth>
              <TextField
                label="Current Password"
                type="password"
                onChange={e => handleChange(e, "currentPassword")}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <FormControl margin="normal" fullWidth>
              <TextField
                label="New Password"
                type="password"
                onChange={e => handleChange(e, "newPassword")}
              />
            </FormControl>
          </Grid>
        </Grid>
        <Button
          type="submit"
          variant="contained"
          disabled={
            values.currentPassword.trim() === "" ||
            values.newPassword.trim() === ""
          }
          className={classes.submit}
        >
          Update Password
        </Button>
      </form>
    </div>
  );
}
