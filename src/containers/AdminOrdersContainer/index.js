import React, { Component } from "react";
import { connect } from "react-redux";
import { AdminOrders } from "../../components/AdminOrders";
import { getOrders } from "../../store/actions/order";
class AdminOrdersContainer extends Component {
  render() {
    const {
      UI: { loading, errors },
      getOrders,
      order,
      user
    } = this.props;
    return (
      <AdminOrders
        user={user}
        loading={loading}
        errors={errors}
        order={order}
        getOrders={getOrders}
      />
    );
  }
}

const mapStateToProps = ({ user, UI, order }) => ({
  UI,
  order,
  user
});

export default connect(mapStateToProps, {
  getOrders
})(AdminOrdersContainer);
