import React from "react";
import PropTypes from "prop-types";
import logo from "../assets/images/Logo.png";
import { Link } from "react-router-dom";

function Error404(props) {
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

Error404.propTypes = {
  location: PropTypes.object
};

export default Error404;