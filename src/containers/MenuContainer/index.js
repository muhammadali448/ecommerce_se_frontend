import React, { Component } from "react";
import { Menu } from "../../components/Menu";
import { connect } from "react-redux";
import { logoutUser } from "../../store/actions/user";

class MenuContainer extends Component {
  render() {
    return (
      <Menu
        authenticated={this.props.authenticated}
        admin={this.props.admin}
        logout={this.props.logoutUser}
      />
    );
  }
}

const mapStateToProps = ({ user: { authenticated, admin } }) => ({
  authenticated, 
  admin
});

export default connect(mapStateToProps, { logoutUser })(MenuContainer);
