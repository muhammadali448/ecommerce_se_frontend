import React, { Component } from "react";
import Cart from "../../components/Cart";
import { connect } from "react-redux";
import { getProductsByFilters } from "../../store/actions/admin";
import { removeItem, updateItem, getCart } from "../../store/actions/cart";
class CartContainer extends Component {
  render() {
    const {
      UI: { loading, errors },
      getProductsByFilters,
      product,
      authenticated,
      getCart,
      removeItem,
      updateItem,
      cart
    } = this.props;
    return (
      <Cart
        loading={loading}
        authenticated={authenticated}
        errors={errors}
        product={product}
        cart={cart}
        getCart={getCart}
        removeItem={removeItem}
        updateItem={updateItem}
        getProductsByFilters={getProductsByFilters}
      />
    );
  }
}

const mapStateToProps = ({
  user: { authenticated },
  UI,
  product,
  category,
  cart
}) => ({
  authenticated,
  UI,
  product,
  category,
  cart
});

export default connect(mapStateToProps, {
  getProductsByFilters,
  getCart,
  removeItem,
  updateItem
})(CartContainer);
