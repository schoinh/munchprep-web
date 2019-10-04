import authReducer from "./../../src/reducers/auth-reducer";
import constants from "./../../src/constants";
const { c, initialState } = constants;

describe("authReducer", () => {
  let action;

  test("Should return default state if no action type is recognized", () => {
    expect(authReducer({}, { type: null })).toEqual({});
  });

  test("Should change state to signed in when user signs in", () => {
    action = {
      type: c.SIGN_IN,
      newAuthStatus: true
    };

    expect(authReducer(initialState.isAuthenticated, action)).toEqual(true);
  });
});
