import constants from "./../constants";
const { c, initialState } = constants;

export default (state = initialState.settings, action) => {
  let newState;

  switch (action.type) {
  case c.TOGGLE_SETTINGS_VIEW:
    newState = Object.assign({}, state);
    newState = {
      visible: action.newStatus
    };
    return newState;

  default:
    return state;
  }
};
