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

  return (
    // firebase.auth().onAuthStateChanged((user) => {
    //   if (user) {
    <div>
      <nav className="navbar navbar-expand-lg navbar-light" style={navBarStyles}>
        <div className="mr-auto">
          <a href="/"><img src={logo} style={logoStyles} /></a>
          <span className="navbar-text">
            Jane Doe
              </span>
        </div>
        <div>
          <ul className="navbar-nav" style={linkStyles}>
            <li style={settingsStyles} className="nav-item">
              <a className="nav-link">Settings</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Log Out</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container">
        <UserTabs masterTicketList={props.masterShoppingList} />
      </div>
    </div>
    //   } else {
    //     <p>No user logged in!</p>;
    //   }
    // })
  );
}

UserPage.propTypes = {
  masterShoppingList: PropTypes.object
};

const mapStateToProps = (state) => {
  console.log(state);
  return {

  };
};

export default connect(mapStateToProps)(UserPage);