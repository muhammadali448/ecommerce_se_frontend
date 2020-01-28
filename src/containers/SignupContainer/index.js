import React, { Component } from "react";
import { SignupForm } from "../../components/Signup";
import { connect } from "react-redux";
import { signupUser } from "../../store/actions/user";
class SignupContainer extends Component {
  render() {
    const {
      UI: { loading, errors }
    } = this.props;
    return (
      <SignupForm
        history={this.props.history}
        signup={this.props.signupUser}
        loading={loading}
        errors={errors}
      />
    );
  }
}

const mapStateToProps = ({ UI }) => {
  return {
    UI
  };
};

export default connect(mapStateToProps, { signupUser })(SignupContainer);
