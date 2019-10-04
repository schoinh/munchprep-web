import React from "react";
import logo from "../assets/images/LogoSmall.png";
import UserTabs from "./UserTabs";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as firebase from "firebase/app";

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
    marginRight: "1em"
  };

  const handleLogOutClick = () => {
    firebase.auth().signOut();
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
              <a className="nav-link">Settings</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={handleLogOutClick} href="/">Log Out</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container">
        <UserTabs masterTicketList={props.masterShoppingList} />
      </div>
    </div>
  );
}

UserPage.propTypes = {
  masterShoppingList: PropTypes.object
};

const mapStateToProps = (state) => {
  return {
    masterShoppingList: state.masterShoppingList
  };
};

export default connect(mapStateToProps)(UserPage);