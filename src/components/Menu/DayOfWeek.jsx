import React from "react";
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";

function DayOfWeek(props) {
  var dayOfWeekStyles = {
    float: "left"
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