import menuReducer from "./../../src/reducers/menu-reducer";
import constants from "./../../src/constants";
const { c, initialState } = constants;

describe("menuReducer", () => {
  let action;

  test("Should return default state if no action type is recognized", () => {
    expect(menuReducer(initialState.menu, { type: null })).toEqual({});
  });

  test("Should update meal when a specific meal is changed", () => {
    action = {
      type: c.RECEIVE_MEAL,
      menu: "Tomatoes"
    };

    expect(menuReducer(initialState.menu, action)).toEqual("Tomatoes");
  });
});
