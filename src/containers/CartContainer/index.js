import React, { Component } from "react";
import Cart from "../../components/Cart";
import { connect } from "react-redux";
import { getProductsByFilters } from "../../store/actions/admin";

class CartContainer extends Component {
  render() {
    const {
      UI: { loading, errors },
      getProductsByFilters,
      product
    } = this.props;
    return (
      <Cart
        loading={loading}
        errors={errors}
        product={product}
        getProductsByFilters={getProductsByFilters}
      />
    );
  }
}

const mapStateToProps = ({ UI, product, category }) => ({
  UI,
  product,
  category
});

export default connect(mapStateToProps, {
  getProductsByFilters
})(CartContainer);
