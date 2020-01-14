import React, { Component } from "react";
import { connect } from "react-redux";
import { UserDashboard } from "../../components/UserDashboard";

class UserDashboardContainer extends Component {
  render() {
    return <UserDashboard user={this.props.user} />;
  }
}

const mapStateToProps = ({ user }) => ({
  user
});

export default connect(mapStateToProps, {})(UserDashboardContainer);
