export const validate = values => {
  // values {title: 'dakjd', categories: 'dkjndja', content: 'dlanldan}
  const errors = {};
  // Validate the inputs from values
  if (!values.name) {
    errors.name = "Please enter your name ";
  }
  if (!values.password) {
    errors.password = "Please enter a password";
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = "Please confirm your password";
  }

  if (values.password && values.password.length < 8) {
    errors.password = "Password length should be more than 8 characters";
  }

  if (values.confirmPassword !== values.password) {
    errors.confirmPassword = "Your password not match";
  }

  if (!values.email) {
    errors.email = "Please enter a email";
  }
  if (
    values.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = "Invalid email address";
  }
  return errors;
};