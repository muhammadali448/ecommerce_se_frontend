import React, { Fragment, useState } from "react";
import { PageDetails } from "../PageDetails";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import useStyles from "./styles";
import { AdminLinks } from "../../common/AdminLinks";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";

export function AdminCreateCategory({ user, addCategory, errors }) {
  const classes = useStyles();
  const [name, setName] = useState("");

  const CategoryForm = () => (
    <Paper className={classes.paperA}>
      <form className={classes.form}>
        <FormControl margin="normal" fullWidth>
          <TextField
            label="Name"
            type="text"
            value={name}
            onChange={e => {
              setName(e.target.value);
            }}
          />
          {errors.error ? (
            <small style={{ color: "red", marginTop: 10 }}>
              {errors.error}
            </small>
          ) : null}
        </FormControl>
        <Button
          variant="contained"
          disabled={name === ""}
          color="primary"
          onClick={() => addCategory({ name })}
          className={classes.submit}
        >
          Add Category
        </Button>
      </form>
    </Paper>
  );

  return (
    <Fragment>
      <PageDetails
        title="Create Category"
        description="Create Category of products"
      />

      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={3}>
          <Grid item md={3} lg={3}>
            <Paper>{<AdminLinks />}</Paper>
          </Grid>
          <Grid item md={9} lg={9}>
            <Fragment>{CategoryForm()}</Fragment>
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  );
}
