import React, { Component } from "react";
import { connect } from "react-redux";
import { AdminCreateProductForm } from "../../components/AdminCreateProduct";
import {
  addProduct,
  getProducts,
  getCategories
} from "../../store/actions/admin";
class AdminCreateProductContainer extends Component {
  render() {
    const {
      UI: { loading, errors },
      user,
      addProduct,
      getProducts,
      product,
      category,
      getCategories
    } = this.props;
    return (
      <AdminCreateProductForm
        user={user}
        getCategories={getCategories}
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
  getCategories
})(AdminCreateProductContainer);
