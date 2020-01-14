import React, { Component } from "react";
import { connect } from "react-redux";
import { loginUser } from "../../store/actions/user";
import { LoginForm } from "../../components/Login";

class LoginContainer extends Component {
  render() {
    const {
      UI: { loading, errors }
    } = this.props;
    return (
      <LoginForm
        login={this.props.loginUser}
        loading={loading}
        errors={errors}
        history={this.props.history}
      />
    );
  }
}

const mapStateToProps = ({ UI }) => {
  return {
    UI
  };
};

export default connect(mapStateToProps, { loginUser })(LoginContainer);
