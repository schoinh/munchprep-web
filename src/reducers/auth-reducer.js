import constants from "./../constants";
const { c, initialState } = constants;

export default (state = initialState.isAuthenticated, action) => {
  switch (action.type) {
  case c.SIGN_IN:
    return action.newAuthStatus;

  default:
    return state;
  }
};