import React, { Component } from "react";
import { connect } from "react-redux";
import { AdminOrders } from "../../components/AdminOrders";
import {
  getOrders,
  getStatusValues,
  updateStatusValue
} from "../../store/actions/order";
class AdminOrdersContainer extends Component {
  render() {
    const {
      UI: { loading, errors },
      getOrders,
      getStatusValues,
      updateStatusValue,
      order,
      user
    } = this.props;
    return (
      <AdminOrders
        user={user}
        getStatusValues={getStatusValues}
        updateStatusValue={updateStatusValue}
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
  getOrders,
  updateStatusValue,
  getStatusValues
})(AdminOrdersContainer);
