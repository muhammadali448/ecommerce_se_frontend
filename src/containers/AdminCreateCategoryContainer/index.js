import React, { Component } from "react";
import { connect } from "react-redux";
import { AdminCreateCategory } from "../../components/AdminCreateCategory";
import { addCategory } from "../../store/actions/admin";
class AdminCreateCategoryContainer extends Component {
  render() {
    const {
      UI: { loading, errors },
      addCategory,
      category
    } = this.props;
    return (
      <AdminCreateCategory
        loading={loading}
        errors={errors}
        category={category}
        addCategory={addCategory}
      />
    );
  }
}

const mapStateToProps = ({ user, UI, category }) => ({
  user,
  UI,
  category
});

export default connect(mapStateToProps, { addCategory })(
  AdminCreateCategoryContainer
);
