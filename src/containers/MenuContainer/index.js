import React, { Component } from "react";
import { Menu } from "../../components/Menu";
import { connect } from "react-redux";
import { logoutUser } from "../../store/actions/user";
import { searchProducts, getCategories } from "../../store/actions/admin";
import { getCart } from "../../store/actions/cart";

class MenuContainer extends Component {
  render() {
    const {
      UI: { loading, errors },
      authenticated,
      admin,
      getCart,
      category,
      logoutUser,
      searchProducts,
      getCategories,
      product,
      cart
    } = this.props;
    return (
      <Menu
        authenticated={authenticated}
        searchProducts={searchProducts}
        category={category}
        getCategories={getCategories}
        errors={errors}
        cart={cart}
        getCart={getCart}
        admin={admin}
        logout={logoutUser}
        product={product}
      />
    );
  }
}

const mapStateToProps = ({
  UI,
  user: { authenticated, admin },
  product,
  cart,
  category
}) => ({
  authenticated,
  UI,
  admin,
  cart,
  category,
  product
});

export default connect(mapStateToProps, {
  logoutUser,
  searchProducts,
  getCategories,
  getCart
})(MenuContainer);
