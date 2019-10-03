import constants from "./../constants";
const { c, initialState } = constants;

export default (state = initialState.isAuthenticated, action) => {
  switch (action.type) {
    case c.TOGGLE_AUTH:
      return action.newAuthStatus;

    default:
      return state;
  }
};