import React, { Fragment, useState } from "react";
import { PageDetails } from "../PageDetails";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import useStyles from "../AdminCreateCategory/styles";
import { AdminLinks } from "../../common/AdminLinks";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";

export function AdminCreateBrand({ addBrand, category, errors }) {
  const classes = useStyles();
  const [values, setValues] = useState({
    name: "",
    categoryValue: ""
  });
  const handleChange = name => event => {
    setValues({
      ...values,
      [name]: event.target.value
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const success = await addBrand({
      name: values.name,
      category: values.categoryValue
    });
    if (success) {
      setValues({ ...values, name: "", categoryValue: "" });
    }
  };

  const BrandForm = () => (
    <Paper className={classes.paperA}>
      <form className={classes.form} onSubmit={handleSubmit}>
        <FormControl fullWidth margin="normal">
          <Select
            native
            value={values.categoryValue}
            onChange={handleChange("categoryValue")}
            inputProps={{
              name: "age",
              id: "age-native-simple"
            }}
          >
            <option value="" disabled>
              Select Category
            </option>
            {category.categories.map((c, index) => (
              <option key={index} value={c._id}>
                {c.name}
              </option>
            ))}
          </Select>
        </FormControl>
        <FormControl fullWidth margin="normal">
          <TextField
            label="Name"
            type="text"
            value={values.name}
            onChange={handleChange("name")}
          />
        </FormControl>
        <Button
          variant="contained"
          type="submit"
          disabled={values.name === "" || values.categoryValue === ""}
          color="primary"
          className={classes.submit}
        >
          Add Brand
        </Button>
      </form>
    </Paper>
  );

  return (
    <Fragment>
      <PageDetails
        title="Create Brand"
        description="Create Brands of category"
      />

      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={3}>
          <Grid item md={3} lg={3}>
            <Paper>{<AdminLinks />}</Paper>
          </Grid>
          <Grid item md={9} lg={9}>
            <Fragment>{BrandForm()}</Fragment>
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  );
}
