import React, { Component } from "react";
import Cart from "../../components/Cart";
import { connect } from "react-redux";
import { getProductsByFilters } from "../../store/actions/admin";
import { removeItem, updateItem, getCart, pay } from "../../store/actions/cart";
class CartContainer extends Component {
  render() {
    const {
      UI: { loading, errors },
      getProductsByFilters,
      pay,
      product,
      authenticated,
      userId,
      getCart,
      removeItem,
      updateItem,
      cart
    } = this.props;
    return (
      <Cart
        loading={loading}
        authenticated={authenticated}
        pay={pay}
        errors={errors}
        userId={userId}
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
  user: { authenticated, _id },
  UI,
  product,
  category,
  cart
}) => ({
  authenticated,
  userId: _id,
  UI,
  product,
  category,
  cart
});

export default connect(mapStateToProps, {
  getProductsByFilters,
  getCart,
  removeItem,
  updateItem,
  pay
})(CartContainer);
