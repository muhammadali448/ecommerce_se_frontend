import React, { Component, Fragment } from "react";
import { reduxForm, Field, reset } from "redux-form";
import { store } from "../../store/store";
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
import { formInput, formSwitch } from "../Input";
import SelectInput from "../Input/SelectInput";
class AdminCreateProduct extends Component {
  state = {
    open: false,
    file: null,
    filePath: null
  };

  componentDidMount() {
    this.props.getCategories();
    this.props.getProducts();
  }

  handleChange = event => {
    this.setState({
      file: URL.createObjectURL(event.target.files[0]),
      filePaths: event.target.files[0]
    });
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
    store.dispatch(reset("AdminCreateProductForm"));
  };

  onAddProduct(data) {
    console.log("---data: ", data);
    var body = new FormData();
    Object.keys(data).forEach(key => {
      body.append(key, data[key]);
    });
     
  }

  render() {
    const {
      classes,
      addProduct,
      product,
      loading,
      handleSubmit,
      submitting,
      category
    } = this.props;
    const categoriesOptions = category.categories.map(category => ({
      value: category.name,
      label: category.name
    }));
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
                  <form onSubmit={handleSubmit(this.onAddProduct.bind(this))}>
                    <DialogContent>
                      <Field label="Name" name="name" component={formInput} />
                      <Button
                        variant="contained"
                        className={classes.uploadBtn}
                        component="label"
                      >
                        Upload Image
                        <input
                          type="file"
                          accept="image/*"
                          className={classes.fileInput}
                          name="image"
                          onChange={this.handleChange}
                        />
                      </Button>
                      <div className={classes.formImage}>
                        {this.state.file ? (
                          <img className={classes.img} src={this.state.file} />
                        ) : (
                          <p className="lead">No image</p>
                        )}
                      </div>
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
                      <Field
                        name="category"
                        options={categoriesOptions}
                        label="Category"
                        placeholder="Enter Category"
                        component={SelectInput}
                      />
                      <Field
                        label="Switch?"
                        name="shipping"
                        component={formSwitch}
                      />
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={this.handleClose} color="primary">
                        Cancel
                      </Button>
                      <Button
                        type="submit"
                        disabled={submitting}
                        color="primary"
                      >
                        Add
                      </Button>
                    </DialogActions>
                  </form>
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
