import React, { Component } from "react";
import Home from "../../components/Home";
import { connect } from "react-redux";
import { getProductsByFilters } from "../../store/actions/admin";
import { addToCart } from "../../store/actions/cart";

class HomeContainer extends Component {
  render() {
    const {
      UI: { loading, errors },
      getProductsByFilters,
      addToCart,
      product
    } = this.props;
    return (
      <Home
        loading={loading}
        errors={errors}
        product={product}
        addToCart={addToCart}
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
  getProductsByFilters,
  addToCart
})(HomeContainer);
