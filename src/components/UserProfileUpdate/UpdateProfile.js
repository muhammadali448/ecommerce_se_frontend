import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import useStyles from "./styles";

export default function UpdateProfile({ user, updateUserInfo, errors }) {
  const classes = useStyles();
  const [values, setValues] = useState({
    name: "",
    email: ""
  });

  useEffect(() => {
    console.log("called");
    setValues({ ...values, name: user.name, email: user.email });
  }, [user]);

  const handleUpdateProfile = e => {
    e.preventDefault();
    const { name, email } = values;
    updateUserInfo({ name, email });
  };

  const handleChange = (e, type) => {
    setValues({ ...values, [type]: e.target.value });
  };

  return (
    <div className={classes.profileUpdate}>
      <Typography className={classes.title} variant="body2">
        Update Profile
      </Typography>
      <form className={classes.form} onSubmit={handleUpdateProfile}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={6}>
            <FormControl margin="normal" fullWidth>
              <TextField
                label="Name"
                type="text"
                value={values.name}
                onChange={e => handleChange(e, "name")}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <FormControl margin="normal" fullWidth>
              <TextField
                label="Email"
                type="email"
                value={values.email}
                onChange={e => handleChange(e, "email")}
              />
            </FormControl>
          </Grid>
        </Grid>
        {errors.error ? (
          <small style={{ color: "red", marginTop: 10 }}>{errors.error}</small>
        ) : null}
        <Button
          type="submit"
          disabled={values.name.trim() === "" || values.email.trim() === ""}
          variant="contained"
          className={classes.submit}
        >
          Update Profile
        </Button>
      </form>
    </div>
  );
}
