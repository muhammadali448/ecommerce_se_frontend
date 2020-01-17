import React, { Component, Fragment } from "react";
import { reduxForm, Field } from "redux-form";
import { PageDetails } from "../PageDetails";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import LinearProgress from "@material-ui/core/LinearProgress";
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import styles from "./styles";
import { validate } from "./validate";
import { AdminLinks } from "../../common/AdminLinks";
import { ProductsTable } from "./productsTable";
import { formInput } from "../Input";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
class AdminCreateProduct extends Component {
  state = {
    open: false,
    shipped: false
  };

  componentDidMount() {
    this.props.getProducts();
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  onAddProduct() {}

  render() {
    const { classes, addProduct, product, loading, handleSubmit } = this.props;
    console.log("---products: ", this.state.shipped);
    return (
      <Fragment>
        <PageDetails
          title="Create Product"
          description="Create Products Admin..."
        />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item md={3} lg={3}>
              <Paper>{<AdminLinks />}</Paper>
            </Grid>
            <Grid item md={9} lg={9}>
              <Fragment>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={this.handleClickOpen}
                >
                  Add a Product
                </Button>
                <Dialog
                  open={this.state.open}
                  onClose={this.handleClose}
                  fullWidth
                  maxWidth="sm"
                  aria-labelledby="form-dialog-title"
                >
                  <DialogTitle id="form-dialog-title">Add Product</DialogTitle>
                  <DialogContent>
                    <form onSubmit={handleSubmit(this.onAddProduct.bind(this))}>
                      <Field label="Name" name="name" component={formInput} />
                      <Field
                        label="Description"
                        name="description"
                        multiline={true}
                        rows="4"
                        component={formInput}
                      />
                      <Grid container spacing={3}>
                        <Grid item md={6} lg={6} sm={12}>
                          <Field
                            label="Quantity"
                            name="quantity"
                            type="number"
                            component={formInput}
                          />
                        </Grid>
                        <Grid item md={6} lg={6} sm={12}>
                          <Field
                            label="Price"
                            name="price"
                            type="number"
                            component={formInput}
                          />
                        </Grid>
                      </Grid>
                      <Grid container spacing={3}>
                        <Grid item md={6} lg={6} sm={12}>
                          <FormControlLabel
                            control={
                              <Switch
                                checked={this.state.shipped}
                                onChange={e =>
                                  this.setState({ shipped: e.target.checked })
                                }
                                value={this.state.shipped}
                              />
                            }
                            label="Shipping?"
                          />
                        </Grid>
                        <Grid item md={6} lg={6} sm={12}>
                          <Field
                            label="Price"
                            name="price"
                            type="number"
                            component={formInput}
                          />
                        </Grid>
                      </Grid>
                    </form>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={this.handleClose} color="primary">
                      Cancel
                    </Button>
                    <Button onClick={this.handleClose} color="primary">
                      Add
                    </Button>
                  </DialogActions>
                </Dialog>
                <div className={classes.container}>
                  {loading ? (
                    <LinearProgress />
                  ) : (
                    <ProductsTable products={product.products} />
                  )}
                </div>
              </Fragment>
            </Grid>
          </Grid>
        </Container>
      </Fragment>
    );
  }
}

export let AdminCreateProductForm = reduxForm({
  validate: validate,
  form: "AdminCreateProductForm"
})(withStyles(styles)(AdminCreateProduct));
