import React, { Component } from "react";
import { connect } from "react-redux";
import { AdminDashboard } from "../../components/AdminDashboard";

class AdminDashboardContainer extends Component {
  render() {
    return <AdminDashboard user={this.props.user} />;
  }
}

const mapStateToProps = ({ user }) => ({
  user
});

export default connect(mapStateToProps, {})(AdminDashboardContainer);
