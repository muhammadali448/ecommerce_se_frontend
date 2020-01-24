import React, { Component } from "react";
import ViewProduct from "../../components/ViewProduct";
import { connect } from "react-redux";
import { getProduct, getRelatedProducts } from "../../store/actions/admin";
import { store } from "../../store/store";
import { SET_PRODUCT, SET_RELATED_PRODUCTS } from "../../store/types";
class ViewProductContainer extends Component {
  componentWillUnmount() {
    store.dispatch({ type: SET_PRODUCT, payload: {} });
    store.dispatch({ type: SET_RELATED_PRODUCTS, payload: [] });
  }

  render() {
    const {
      UI: { loading, errors },
      product,
      match,
      getProduct,
      getRelatedProducts
    } = this.props;
    return (
      <ViewProduct
        productId={match.params.productId}
        loading={loading}
        getProduct={getProduct}
        getRelatedProducts={getRelatedProducts}
        errors={errors}
        product={product}
      />
    );
  }
}

const mapStateToProps = ({ UI, product }) => ({
  UI,
  product
});

export default connect(mapStateToProps, { getProduct, getRelatedProducts })(
  ViewProductContainer
);
