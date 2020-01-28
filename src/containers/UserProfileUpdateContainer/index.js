import React, { Component } from "react";
import { connect } from "react-redux";
import { UserProfileUpdate } from "../../components/UserProfileUpdate";
import { updateUserInfo } from "../../store/actions/user";
class UserProfileUpdateContainer extends Component {
  render() {
    const {
      UI: { loading, errors },
      user,
      updateUserInfo
    } = this.props;
    return (
      <UserProfileUpdate
        user={user}
        errors={errors}
        updateUserInfo={updateUserInfo}
      />
    );
  }
}

const mapStateToProps = ({ UI, user }) => ({
  user,
  UI
});

export default connect(mapStateToProps, { updateUserInfo })(
  UserProfileUpdateContainer
);
