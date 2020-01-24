import React, { Component } from "react";
import Shop from "../../components/Shop";
import { connect } from "react-redux";
import {
  getCategories,
  getProductsBySearch,
  getProductsPriceRanges
} from "../../store/actions/admin";
import { store } from "../../store/store";
import {
  SET_PRODUCTS_PRICE_RANGES,
  SET_PRODUCTS_BY_CATEGORIES
} from "../../store/types";
class ShopContainer extends Component {
  componentWillUnmount() {
    store.dispatch({ type: SET_PRODUCTS_BY_CATEGORIES, payload: {} });
    store.dispatch({ type: SET_PRODUCTS_PRICE_RANGES, payload: [] });
  }

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
