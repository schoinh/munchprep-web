import menuReducer from "./../../src/reducers/menu-reducer";
import constants from "./../../src/constants";
const { c, initialState } = constants;

describe("menuReducer", () => {
  let action;

  test("Should return default state if no action type is recognized", () => {
    expect(menuReducer(initialState.menu, { type: null })).toEqual({});
  });

  test("Should update meals when meals are changed", () => {
    action = {
      type: c.RECEIVE_MEALS,
      dayId: 0,
      dayName: "Sunday",
      meals: {
        breakfast: "eggs",
        lunch: "sandwich",
        dinner: "pizza"
      }
    };

    expect(menuReducer(initialState.menu, action)).toEqual({
      0: {
        dayName: "Sunday",
        meals: {
          breakfast: "eggs",
          lunch: "sandwich",
          dinner: "pizza"
        }
      }
    });
  });
});
