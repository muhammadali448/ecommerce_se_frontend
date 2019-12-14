import React, { Component } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import { Field, reduxForm } from "redux-form";
import { validate } from "./validation";
import { formInput, formPassword } from "../Input";
import Person from "@material-ui/icons/Person";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import {styles} from "./styles";

class Signup extends Component {
  state = {
    showPassword: false,
    value: "male"
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };
  handleClickShowPassword = () => {
    this.setState({ showPassword: !this.state.showPassword });
  };

  componentWillUnmount() {}

  onSignup(data) {}

  render() {
    const { classes, handleSubmit } = this.props;
    return (
      <main className={classes.main}>
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <Person />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form
            className={classes.form}
            onSubmit={handleSubmit(this.onSignup.bind(this))}
          >
            <Field label="Name" name="name" component={formInput} />
            <Field label="Email" name="email" component={formInput} />
            <Field
              name="password"
              showPassword={this.state.showPassword}
              handleClickShowPassword={this.handleClickShowPassword}
              component={formPassword}
            />
            <Field
              label="Confirm Password"
              type="password"
              name="confirmPassword"
              component={formInput}
            />
            {/* {this.props.errorMessage ? (
              <small style={{ color: "red", marginTop: 10 }}>
                {this.props.errorMessage}
              </small>
            ) : null} */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign up
            </Button>
          </form>
        </Paper>
      </main>
    );
  }
}

export let SignupForm = reduxForm({
  validate: validate,
  form: "SignupForm"
})(withStyles(styles)(Signup));

