import React, { Component } from "react";
import { connect } from "react-redux";
import { formValueSelector } from "redux-form";
import { AdminCreateProductForm } from "../../components/AdminCreateProduct";
import {
  addProduct,
  getBrandsByCategory,
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
      brand,
      addProduct,
      deleteProduct,
      getProducts,
      updateProduct,
      categorySelect,
      product,
      getBrandsByCategory,
      category,
      getCategories
    } = this.props;
    return (
      <AdminCreateProductForm
        user={user}
        brand={brand}
        getCategories={getCategories}
        updateProduct={updateProduct}
        categorySelect={categorySelect}
        deleteProduct={deleteProduct}
        getBrandsByCategory={getBrandsByCategory}
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
const selector = formValueSelector("AdminCreateProductForm");
const mapStateToProps = state => {
  const categorySelect = selector(state, "category");
  // console.log("categortSelect: ", categorySelect);
  const { user, UI, product, category, brand } = state;
  return {
    user,
    categorySelect,
    UI,
    brand,
    product,
    category
  };
};

export default connect(mapStateToProps, {
  addProduct,
  getProducts,
  updateProduct,
  getBrandsByCategory,
  deleteProduct,
  getCategories
})(AdminCreateProductContainer);
