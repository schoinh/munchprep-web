import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/Logo.png";
import github from "../assets/images/GitHub_Logo.png";

function Splash() {
  var logoStyles = {
    width: "400px",
    display: "block",
    marginRight: "auto",
    marginLeft: "auto",
    marginTop: "50px",
    marginBottom: "2em"
  };

  var buttonStyles = {
    margin: "auto",
    display: "block"
  };

  var githubStyles = {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "5em",
    width: "200px",
    textAlign: "center",
    border: "1px",
    borderStyle: "solid",
    borderColor: "lightgray",
    borderRadius: "5px",
    padding: "10px"
  };

  var githubLogoStyles = {
    height: "2em",
    margin: "auto",
    display: "block"
  };

  return (
    <div>
      <img style={logoStyles} src={logo} />
      <Link to="/user-page"><button style={buttonStyles} className="btn btn-light">Sign In with Google</button></Link>
      <div style={githubStyles}>
        MunchPrep on <a href="http://github.com/schoinh/MunchPrep"><img style={githubLogoStyles} src={github} /></a>
      </div>
    </div>
  );
}

export default Splash;