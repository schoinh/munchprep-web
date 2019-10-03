import authReducer from "./../../src/reducers/auth-reducer";
import constants from "./../../src/constants";
const { c } = constants;

describe("authReducer", () => {
  let action;

  test("Should return default state if no action type is recognized", () => {
    expect(authReducer({}, { type: null })).toEqual({});
  });
});
