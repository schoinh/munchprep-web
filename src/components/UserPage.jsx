import React from "react";
import logo from "../assets/images/LogoSmall.png";
import UserTabs from "./UserTabs";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import firebase from "firebase/app";
import "firebase/auth";

function UserPage(props) {
  var navBarStyles = {
    backgroundColor: "#ffb5a6"
  };

  var logoStyles = {
    height: "2.5em",
    marginRight: "1em"
  };

  var linkStyles = {
    flexDirection: "row"
  };

  var settingsStyles = {
    marginRight: "1em",
    cursor: "pointer"
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light" style={navBarStyles}>
        <div className="mr-auto">
          <img src={logo} style={logoStyles} />
          <span className="navbar-text">
            {firebase.auth().currentUser.displayName}
          </span>
        </div>
        <div>
          <ul className="navbar-nav" style={linkStyles}>
            <li style={settingsStyles} className="nav-item">
              <a className="nav-link" onClick={() => { alert("App customization is coming soon!"); }}> Settings</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => { firebase.auth().signOut(); }} href="/">Log Out</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container">
        <UserTabs shoppingList={props.shoppingList} />
      </div>
    </div>
  );
}

UserPage.propTypes = {
  shoppingList: PropTypes.object
};

const mapStateToProps = (state) => {
  return {
    shoppingList: state.shoppingList
  };
};

export default connect(mapStateToProps)(UserPage);