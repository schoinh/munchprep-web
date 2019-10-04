import React from "react";
import PropTypes from "prop-types";

function DayOfWeek(props) {
  var dayOfWeekStyles = {
    width: "20em",
    marginBottom: "1em",
    marginLeft: "auto",
    marginRight: "auto"
  };

  return (
    <div style={dayOfWeekStyles} className="card">
      <div className="card-header">
        {props.name}
      </div>
      <div className="card-body">
        {props.meals.breakfast}<br />
        {props.meals.lunch}<br />
        {props.meals.dinner}
      </div>
    </div>
  );
}

DayOfWeek.propTypes = {
  name: PropTypes.string,
  meals: PropTypes.object
};

export default DayOfWeek;