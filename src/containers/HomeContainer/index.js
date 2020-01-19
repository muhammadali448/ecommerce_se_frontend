import React, { Component } from "react";
import Home from "../../components/Home";
import { connect } from "react-redux";
import { getProductsByFilters } from "../../store/actions/admin";

class HomeContainer extends Component {
  render() {
    const {
      UI: { loading, errors },
      getProductsByFilters,
      product
    } = this.props;
    return (
      <Home
        loading={loading}
        errors={errors}
        product={product}
        getProductsByFilters={getProductsByFilters}
      />
    );
  }
}

const mapStateToProps = ({ UI, product, category }) => ({
  UI,
  product,
  category
});

export default connect(mapStateToProps, {
  getProductsByFilters
})(HomeContainer);
