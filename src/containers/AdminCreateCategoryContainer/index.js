import React, { Component } from "react";
import { connect } from "react-redux";
import { AdminCreateCategory } from "../../components/AdminCreateCategory";
import { addCategory } from "../../store/actions/admin";
class AdminCreateCategoryContainer extends Component {
  render() {
    return (
      <AdminCreateCategory
        user={this.props.user}
        addCategory={this.props.addCategory}
      />
    );
  }
}

const mapStateToProps = ({ user }) => ({
  user
});

export default connect(mapStateToProps, { addCategory })(
  AdminCreateCategoryContainer
);