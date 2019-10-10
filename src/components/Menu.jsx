import React from "react";
import DayOfWeek from "./DayOfWeek";
import PropTypes from "prop-types";
import iconX from "../assets/images/icon-x.png";
import Snacks from "./Snacks";
import { connect } from "react-redux";
import { clearMenu } from "./../actions";

function Menu(props) {
  var menuStyles = {
    marginTop: "2em"
  };

  var columnStyles = {
    float: "left",
    marginLeft: "2em"
  };

  var iconXStyles = {
    width: "50px",
    height: "50px",
    marginTop: "30px",
    float: "left",
    cursor: "pointer"
  };

  const handleXClick = () => {
    const { dispatch } = props;
    dispatch(clearMenu());
  };

  return (
    <div>
      <div className="row justify-content-center" style={menuStyles}>
        <div style={columnStyles}>
          {Object.keys(props.menu).filter(dayId => dayId < 4).map(dayId => {
            let day = props.menu[dayId];
            return <DayOfWeek
              dayId={dayId}
              name={day.dayName}
              meals={day.meals}
              key={dayId} />;
          })}
        </div>
        <div style={columnStyles}>
          {Object.keys(props.menu).filter(dayId => dayId > 3).map(dayId => {
            let day = props.menu[dayId];
            return <DayOfWeek
              dayId={dayId}
              name={day.dayName}
              meals={day.meals}
              key={dayId} />;
          })}
          <Snacks snacks={props.snacks} />
        </div>
      </div>
      <div className="row">
        <img src={iconX} onClick={handleXClick} style={iconXStyles} />
      </div>
    </div>
  );
}

Menu.propTypes = {
  menu: PropTypes.object,
  snacks: PropTypes.string,
  dispatch: PropTypes.func
};

const mapStateToProps = (state) => {
  return {
    menu: state.menu,
    snacks: state.snacks
  };
};

export default connect(mapStateToProps)(Menu);