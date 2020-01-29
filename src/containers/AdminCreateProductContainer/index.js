import React, { Component } from "react";
import { connect } from "react-redux";
import { AdminCreateProductForm } from "../../components/AdminCreateProduct";
import {
  addProduct,
  getProducts,
  getCategories,
  deleteProduct,
  updateProduct
} from "../../store/actions/admin";
class AdminCreateProductContainer extends Component {
  render() {
    const {
      UI: { loading, errors },
      user,
      addProduct,
      deleteProduct,
      getProducts,
      updateProduct,
      product,
      category,
      getCategories
    } = this.props;
    return (
      <AdminCreateProductForm
        user={user}
        getCategories={getCategories}
        updateProduct={updateProduct}
        deleteProduct={deleteProduct}
        loading={loading}
        errors={errors}
        addProduct={addProduct}
        getProducts={getProducts}
        product={product}
        category={category}
      />
    );
  }
}

const mapStateToProps = ({ user, UI, product, category }) => ({
  user,
  UI,
  product,
  category
});

export default connect(mapStateToProps, {
  addProduct,
  getProducts,
  updateProduct,
  deleteProduct,
  getCategories
})(AdminCreateProductContainer);
