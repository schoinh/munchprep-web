import React from "react";
import PropTypes from "prop-types";

function Snacks(props) {
  var SnacksStyles = {
    width: "20em",
    marginBottom: "1em",
    marginLeft: "auto",
    marginRight: "auto"
  };

  return (
    <div style={SnacksStyles} className="card">
      <div className="card-header">
        Snacks
      </div>
      <div className="card-body">
        {props.snacks}
      </div>
    </div>
  );
}

Snacks.propTypes = {
  snacks: PropTypes.string
};

export default Snacks;