import React, { Component } from "react";
import { connect } from "react-redux";
import { AdminCreateProductForm } from "../../components/AdminCreateProduct";
import { addProduct, getProducts } from "../../store/actions/admin";
class AdminCreateProductContainer extends Component {
  render() {
    const {
      UI: { loading, errors },
      user,
      addProduct,
      getProducts,
      product
    } = this.props;
    return (
      <AdminCreateProductForm
        user={this.props.user}
        loading={loading}
        errors={errors}
        addProduct={addProduct}
        getProducts={getProducts}
        product={product}
      />
    );
  }
}

const mapStateToProps = ({ user, UI, product }) => ({
  user,
  UI,
  product
});

export default connect(mapStateToProps, { addProduct, getProducts })(
  AdminCreateProductContainer
);
