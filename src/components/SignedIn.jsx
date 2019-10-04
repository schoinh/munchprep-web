import React from "react";
import UserPage from "./UserPage";
import Splash from "./Splash";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as firebase from "firebase/app";
import * as actions from "./../actions";

class SignedIn extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    const { toggleAuth, startFirebaseComm } = actions;
    firebase.auth().onAuthStateChanged(user => {
      dispatch(toggleAuth(!!user));
      if (user) {
        // console.log("firebase.auth().currentUser: ", firebase.auth().currentUser);
        dispatch(startFirebaseComm(firebase.auth().currentUser.uid));
      }
    });
  }

  render() {
    return (
      <div>
        {this.props.isAuthenticated ? (
          <UserPage />
        ) : (
          <Splash />
        )}
      </div>
    );
  }
}

SignedIn.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.isAuthenticated
  };
};

export default connect(mapStateToProps)(SignedIn);