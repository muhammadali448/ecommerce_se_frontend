import React, { Component } from "react";
import ViewProduct from "../../components/ViewProduct";
import { connect } from "react-redux";
import { getProduct } from "../../store/actions/admin";
import { store } from "../../store/store";
import { SET_PRODUCT } from "../../store/types";
class ViewProductContainer extends Component {
  componentWillUnmount() {
    store.dispatch({ type: SET_PRODUCT, payload: {} });
  }

  render() {
    const {
      UI: { loading, errors },
      product,
      match,
      getProduct
    } = this.props;
    return (
      <ViewProduct
        productId={match.params.productId}
        loading={loading}
        getProduct={getProduct}
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

export default connect(mapStateToProps, { getProduct })(ViewProductContainer);
