import React, { Component } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import { Field, reduxForm } from "redux-form";
import { validate } from "../../common/formValidation";
import { formInput, formPassword } from "../Input";
import Person from "@material-ui/icons/Person";
import CircularProgress from "@material-ui/core/CircularProgress";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import { styles } from "../../common/formStyles";

class Login extends Component {
  state = {
    showPassword: false
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };
  handleClickShowPassword = () => {
    this.setState({ showPassword: !this.state.showPassword });
  };

  onLogin(data) {
    this.props.login(data, this.props.history);
  }

  render() {
    const { classes, handleSubmit, errors, loading } = this.props;
    return (
      <main className={classes.main}>
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <Person />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <form
            className={classes.form}
            onSubmit={handleSubmit(this.onLogin.bind(this))}
          >
            <Field label="Email" name="email" component={formInput} />
            <Field
              name="password"
              showPassword={this.state.showPassword}
              handleClickShowPassword={this.handleClickShowPassword}
              component={formPassword}
            />
            {errors.error ? (
              <small style={{ color: "red", marginTop: 10 }}>
                {errors.error}
              </small>
            ) : null}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              {loading ? <CircularProgress /> : "Login"}
            </Button>
          </form>
        </Paper>
      </main>
    );
  }
}

export let LoginForm = reduxForm({
  validate: validate,
  form: "LoginForm"
})(withStyles(styles)(Login));
