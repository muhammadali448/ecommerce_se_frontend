import React, { Component } from "react";
import { Menu } from "../../components/Menu";
import { connect } from "react-redux";
import { logoutUser } from "../../store/actions/user";
import { searchProducts } from "../../store/actions/admin";

class MenuContainer extends Component {
  render() {
    const {
      UI: { loading, errors },
      authenticated,
      admin,
      logoutUser,
      searchProducts,
      product
    } = this.props;
    return (
      <Menu
        authenticated={authenticated}
        searchProducts={searchProducts}
        errors={errors}
        admin={admin}
        logout={logoutUser}
        product={product}
      />
    );
  }
}

const mapStateToProps = ({ UI, user: { authenticated, admin }, product }) => ({
  authenticated,
  UI,
  admin,
  product
});

export default connect(mapStateToProps, { logoutUser, searchProducts })(MenuContainer);
