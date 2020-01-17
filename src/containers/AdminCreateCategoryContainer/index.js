import React, { Component } from "react";
import { connect } from "react-redux";
import { AdminCreateCategory } from "../../components/AdminCreateCategory";
import { addCategory } from "../../store/actions/admin";
class AdminCreateCategoryContainer extends Component {
  render() {
    const {
      UI: { loading, errors }
    } = this.props;
    return (
      <AdminCreateCategory
        user={this.props.user}
        loading={loading}
        errors={errors}
        addCategory={this.props.addCategory}
      />
    );
  }
}

const mapStateToProps = ({ user, UI }) => ({
  user,
  UI
});

export default connect(mapStateToProps, { addCategory })(
  AdminCreateCategoryContainer
);
