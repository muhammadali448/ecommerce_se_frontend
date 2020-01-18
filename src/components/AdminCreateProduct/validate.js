export const validate = values => {
  // values {title: 'dakjd', categories: 'dkjndja', content: 'dlanldan}
  const errors = {};
  // Validate the inputs from values
  if (!values.name) {
    errors.name = "Please enter name ";
  }
  if (!values.description) {
    errors.description = "Please enter description ";
  }
  if (!values.quantity) {
    errors.quantity = "Please enter quantity ";
  }
  if (!values.price) {
    errors.price = "Please enter price ";
  }
  if (!values.category) {
    errors.category = "Please enter price ";
  }
  return errors;
};
