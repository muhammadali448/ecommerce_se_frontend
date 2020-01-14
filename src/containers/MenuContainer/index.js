import React, { Component } from "react";
import { Menu } from "../../components/Menu";
import { connect } from "react-redux";
import { logoutUser } from "../../store/actions/user";

class MenuContainer extends Component {
  render() {
    return (
      <Menu
        authenticated={this.props.authenticated}
        logout={this.props.logoutUser}
      />
    );
  }
}

const mapStateToProps = ({ user: { authenticated } }) => ({
  authenticated
});

export default connect(mapStateToProps, { logoutUser })(MenuContainer);
