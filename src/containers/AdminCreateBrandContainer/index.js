import React, { Component } from "react";
import { connect } from "react-redux";
import { AdminCreateBrand } from "../../components/AdminCreateBrand";
import { addBrand } from "../../store/actions/admin";
class AdminCreateBrandContainer extends Component {
  render() {
    const {
      UI: { loading, errors },
      category,
      addBrand
    } = this.props;
    return (
      <AdminCreateBrand
        user={this.props.user}
        loading={loading}
        category={category}
        errors={errors}
        addBrand={addBrand}
      />
    );
  }
}

const mapStateToProps = ({ category, user, UI }) => ({
  user,
  UI,
  category
});

export default connect(mapStateToProps, { addBrand })(
  AdminCreateBrandContainer
);
