import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { RIEInput } from "@attently/riek";

function DayOfWeek(props) {
  var dayOfWeekStyles = {
    width: "20em",
    marginBottom: "1em",
    marginLeft: "auto",
    marginRight: "auto"
  };

  function handleMealEdit(mealId) {
    console.log(mealId + "handleMealEdit has been called");
  }

  return (
    <div style={dayOfWeekStyles} className="card">
      <div className="card-header">
        {props.name}
      </div>
      <div className="card-body">
        <RIEInput
          value={props.meals.breakfast}
          change={handleMealEdit}
          propName="some kind of uid (and meal name?)" /><br />
        <RIEInput
          value={props.meals.lunch}
          change={handleMealEdit}
          propName="some kind of uid (and meal name?)" /><br />
        <RIEInput
          value={props.meals.dinner}
          change={handleMealEdit}
          propName="some kind of uid (and meal name?)" />
      </div>
    </div>
  );
}

DayOfWeek.propTypes = {
  name: PropTypes.string,
  meals: PropTypes.object
};

export default connect()(DayOfWeek);