import React, { Component } from "react";
import { connect } from "react-redux";
import { UserDashboard } from "../../components/UserDashboard";

class UserDashboardContainer extends Component {
  render() {
    return <UserDashboard />;
  }
}

const mapStateToProps = ({ user: { authenticated } }) => ({
  authenticated
});

export default connect(mapStateToProps, {})(UserDashboardContainer);
