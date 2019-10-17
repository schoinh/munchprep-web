import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { RIEInput } from "@attently/riek";
import { updateMenu } from "../actions";
import Badge from "react-bootstrap/Badge";

function DayOfWeek(props) {
  var dayOfWeekStyles = {
    width: "20em",
    marginBottom: "1em",
    marginLeft: "auto",
    marginRight: "auto"
  };

  function handleMealEdit(mealKeyValue) {
    const { dispatch } = props;
    dispatch(updateMenu(mealKeyValue, props.dayId));
  }

  return (
    <div style={dayOfWeekStyles} className="card">
      <div className="card-header">
        {props.name}
      </div>
      <div className="card-body">
        <Badge variant="light">B</Badge> <RIEInput
          value={props.meals.breakfast}
          change={handleMealEdit}
          propName="meals.breakfast" /><br />
        <Badge variant="light">L</Badge> <RIEInput
          value={props.meals.lunch}
          change={handleMealEdit}
          propName="meals.lunch" /><br />
        <Badge variant="light">D</Badge> <RIEInput
          value={props.meals.dinner}
          change={handleMealEdit}
          propName="meals.dinner" />
      </div>
    </div>
  );
}

DayOfWeek.propTypes = {
  name: PropTypes.string,
  meals: PropTypes.object,
  dayId: PropTypes.string,
  dispatch: PropTypes.func
};

export default connect()(DayOfWeek);