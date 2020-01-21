import React, { Component } from "react";
import Shop from "../../components/Shop";
import { connect } from "react-redux";
import {
  getCategories,
  getProductsBySearch,
  getProductsPriceRanges
} from "../../store/actions/admin";
class ShopContainer extends Component {
  render() {
    const {
      UI: { loading, errors },
      product,
      getCategories,
      getProductsBySearch,
      getProductsPriceRanges,
      category
    } = this.props;
    return (
      <Shop
        loading={loading}
        errors={errors}
        getProductsBySearch={getProductsBySearch}
        getCategories={getCategories}
        getProductsPriceRanges={getProductsPriceRanges}
        category={category}
        product={product}
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
  getCategories,
  getProductsBySearch,
  getProductsPriceRanges
})(ShopContainer);