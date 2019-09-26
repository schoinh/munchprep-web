import React from "react";
import logo from "../assets/images/Logo.png";
import { Link } from "react-router-dom";

function Error404() {
  var logoStyles = {
    width: "400px",
    display: "block",
    marginRight: "auto",
    marginLeft: "auto",
    marginTop: "50px",
    marginBottom: "2em"
  };

  var textStyles = {
    textAlign: "center"
  };

  return (
    <div>
      <img style={logoStyles} src={logo} />
      <div style={textStyles}>
        <h2>Uh oh... This page does not exist!</h2>
        <h3><Link to="/">Return Home</Link></h3>
      </div>
    </div>
  );
}

export default Error404;