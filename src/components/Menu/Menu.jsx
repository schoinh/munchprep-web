import React from "react";
// import CardGroup from "react-bootstrap/CardGroup";
import DayOfWeek from "./DayOfWeek";
import iconX from "../../assets/images/icon-x.png";

function Menu() {
  let menusByDay = {
    1: {
      name: "Sunday",
      meals: {
        "breakfast": {
          name: "Scrambled eggs"
        },
        "lunch": {
          name: "Cobb salad"
        },
        "dinner": {
          name: "Grilled salmon"
        }
      }
    },
    2: {
      name: "Monday",
      meals: {
        "breakfast": {
          name: "Frittata"
        },
        "lunch": {
          name: "Chicken sandwich"
        },
        "dinner": {
          name: "Green curry"
        }
      }
    },
    3: {
      name: "Tuesday",
      meals: {
        "breakfast": {
          name: "Cereal"
        },
        "lunch": {
          name: "Leftover curry"
        },
        "dinner": {
          name: "Takeout"
        }
      }
    },
    4: {
      name: "Wednesday",
      meals: {
        "breakfast": {
          name: "Scrambled eggs"
        },
        "lunch": {
          name: "Turkey hash"
        },
        "dinner": {
          name: "Kalua pork"
        }
      }
    },
    5: {
      name: "Thursday",
      meals: {
        "breakfast": {
          name: "Cereal"
        },
        "lunch": {
          name: "Egg salad"
        },
        "dinner": {
          name: "Pizza"
        }
      }
    },
    6: {
      name: "Friday",
      meals: {
        "breakfast": {
          name: "Grits"
        },
        "lunch": {
          name: "Chipotle"
        },
        "dinner": {
          name: "Jerk chicken"
        }
      }
    },
    7: {
      name: "Saturday",
      meals: {
        "breakfast": {
          name: "Pancakes"
        },
        "lunch": {
          name: "Poke bowl"
        },
        "dinner": {
          name: "Bulgogi"
        }
      }
    }
  };

  let snacks = "Carrots, pistachios";

  var menuStyles = {
    marginTop: "2em",
    marginLeft: "auto",
    marginRight: "auto",
    display: "block"
  };

  var column2Styles = {
    float: "left",
    marginLeft: "2em",
    marginRight: "auto"
  };

  var iconXStyles = {
    width: "50px",
    marginTop: "30px",
    marginLeft: "auto",
    marginRight: "auto",
    display: "block"
  };

  return (
    <div style={menuStyles}>
      <div style={column2Styles}>
        {Object.keys(menusByDay).filter(dayId => dayId < 5).map(dayId => {
          let day = menusByDay[dayId];
          return <DayOfWeek
            name={day.name}
            meals={day.meals}
            key={dayId} />;
        })}
      </div>
      <div style={column2Styles}>
        {Object.keys(menusByDay).filter(dayId => dayId > 4).map(dayId => {
          let day = menusByDay[dayId];
          return <DayOfWeek
            name={day.name}
            meals={day.meals}
            key={dayId} />;
        })}
      </div>
      <img src={iconX} style={iconXStyles} />
    </div>
  );
}

export default Menu;