import React, { Component } from "react";
import { Menu } from "../../components/Menu";
import { connect } from "react-redux";
import { logoutUser } from "../../store/actions/user";
import { searchProducts, getCategories } from "../../store/actions/admin";

class MenuContainer extends Component {
  render() {
    const {
      UI: { loading, errors },
      authenticated,
      admin,
      category,
      logoutUser,
      searchProducts,
      getCategories,
      product
    } = this.props;
    return (
      <Menu
        authenticated={authenticated}
        searchProducts={searchProducts}
        category={category}
        getCategories={getCategories}
        errors={errors}
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
  category
}) => ({
  authenticated,
  UI,
  admin,
  category,
  product
});

export default connect(mapStateToProps, {
  logoutUser,
  searchProducts,
  getCategories
})(MenuContainer);
