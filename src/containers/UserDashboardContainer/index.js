import React, { Component } from "react";
import { connect } from "react-redux";
import { UserDashboard } from "../../components/UserDashboard";
import { getOrdersPurchaseHistory } from "../../store/actions/order";

class UserDashboardContainer extends Component {
  render() {
    return (
      <UserDashboard
        user={this.props.user}
        getOrdersPurchaseHistory={this.props.getOrdersPurchaseHistory}
        order={this.props.order}
      />
    );
  }
}

const mapStateToProps = ({ user, order }) => ({
  user,
  order
});

export default connect(mapStateToProps, { getOrdersPurchaseHistory })(
  UserDashboardContainer
);
