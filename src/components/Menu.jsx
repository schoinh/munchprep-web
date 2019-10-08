import React from "react";
import DayOfWeek from "./DayOfWeek";
import PropTypes from "prop-types";
import iconX from "../assets/images/icon-x.png";
import Snacks from "./Snacks";
import { connect } from "react-redux";
import { clearMenu } from "./../actions";

function Menu(props) {
  let menusByDay = {
    1: {
      name: "Sunday",
      meals: {
        breakfast: "Scrambled eggs",
        lunch: "Cobb salad",
        dinner: "Grilled salmon"
      }
    },
    2: {
      name: "Monday",
      meals: {
        breakfast: "Frittata",
        lunch: "Chicken sandwich",
        dinner: "Green curry"
      }
    },
    3: {
      name: "Tuesday",
      meals: {
        breakfast: "Cereal",
        lunch: "Leftover curry",
        dinner: "Takeout"
      }
    },
    4: {
      name: "Wednesday",
      meals: {
        breakfast: "Scrambled eggs",
        lunch: "Turkey hash",
        dinner: "Kalua pork"
      }
    },
    5: {
      name: "Thursday",
      meals: {
        breakfast: "Cereal",
        lunch: "Egg salad",
        dinner: "Pizza"
      }
    },
    6: {
      name: "Friday",
      meals: {
        breakfast: "Grits",
        lunch: "Chipotle",
        dinner: "Jerk chicken"
      }
    },
    7: {
      name: "Saturday",
      meals: {
        breakfast: "Pancakes",
        lunch: "Poke bowl",
        dinner: "Bulgogi"
      }
    }
  };

  let snacks = "Carrots, pistachios";

  var menuStyles = {
    marginTop: "2em"
  };

  var columnStyles = {
    float: "left",
    marginLeft: "2em"
  };

  var iconXStyles = {
    width: "50px",
    marginTop: "30px",
    float: "left"
  };

  const handleXClick = () => {
    const { dispatch } = props;
    dispatch(clearMenu());
  };

  return (
    <div>
      <div className="row justify-content-center" style={menuStyles}>
        <div style={columnStyles}>
          {Object.keys(menusByDay).filter(dayId => dayId < 5).map(dayId => {
            let day = menusByDay[dayId];
            return <DayOfWeek
              name={day.name}
              meals={day.meals}
              key={dayId} />;
          })}
        </div>
        <div style={columnStyles}>
          {Object.keys(menusByDay).filter(dayId => dayId > 4).map(dayId => {
            let day = menusByDay[dayId];
            return <DayOfWeek
              name={day.name}
              meals={day.meals}
              key={dayId} />;
          })}
          <Snacks snacks={snacks} />
        </div>
      </div>
      <div className="row">
        <img src={iconX} onClick={handleXClick} style={iconXStyles} />
      </div>
    </div>
  );
}

Menu.propTypes = {
  masterMenu: PropTypes.object,
  dispatch: PropTypes.func
};

export default connect()(Menu);