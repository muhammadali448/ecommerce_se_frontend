import React from "react";
import { TextField } from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import IconButton from "@material-ui/core/IconButton";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, DatePicker } from "material-ui-pickers";
import Input from "@material-ui/core/Input";
import RadioGroup from "@material-ui/core/RadioGroup";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
export const formInput = ({ input, label, type, meta: { touched, error } }) => {
  return (
    <FormControl margin="normal" fullWidth>
      <TextField {...input} label={label} type={type} />
      <small style={{ color: "red", marginTop: 10 }}>
        {touched ? error : ""}
      </small>
    </FormControl>
  );
};

export const formPassword = ({
  input,
  showPassword,
  handleClickShowPassword,
  meta: { touched, error }
}) => {
  return (
    <FormControl margin="normal" fullWidth>
      <InputLabel htmlFor="adornment-password">Password</InputLabel>
      <Input
        {...input}
        id="adornment-password"
        type={showPassword ? "text" : "password"}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="Toggle password visibility"
              onClick={handleClickShowPassword}
            >
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
      />
      <small style={{ color: "red", marginTop: 10 }}>
        {touched ? error : ""}
      </small>
    </FormControl>
  );
};

export const formRadioGroup = ({
  input,
  meta: { touched, error },
  ...Children
}) => {
  return (
    <FormControl component="fieldset" style={{ marginTop: 5 }}>
      <FormLabel component="legend">Gender</FormLabel>
      <RadioGroup
        {...input}
        {...Children}
        aria-label="Gender"
        row
        valueselected={input.value}
        onChange={(event, value) => input.onChange(value)}
      />
      <small style={{ color: "red", marginTop: 10 }}>
        {touched ? error : ""}
      </small>
    </FormControl>
  );
};

export const formDateBirth = ({
  input,
  classesGrid,
  value,
  meta: { touched, error }
}) => {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container className={classesGrid} justify="space-around">
        <DatePicker
          keyboard
          {...input}
          margin="normal"
          label="Birthday"
          maxDate={new Date()}
          format="d MMM yyyy"
          placeholder="Date of Birth"
        />
      </Grid>
      <small style={{ color: "red", marginTop: 10 }}>
        {touched ? error : ""}
      </small>
    </MuiPickersUtilsProvider>
  );
};
