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
        {props.meals.breakfast.name}<br />
        {props.meals.lunch.name}<br />
        {props.meals.dinner.name}
      </div>
    </div>
  );
}

DayOfWeek.propTypes = {
  name: PropTypes.string,
  meals: PropTypes.object
};

export default DayOfWeek;