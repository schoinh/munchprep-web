import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/LogoSmall.png";

function UserPage() {
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
    <div>
      <nav className="navbar navbar-expand-lg navbar-light" style={navBarStyles}>
        <div className="mr-auto">
          <a href="#"><img src={logo} style={logoStyles} /></a>
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
        tabs here
      </div>
    </div>
  );
}

export default UserPage;