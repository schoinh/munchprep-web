import constants from "./../constants";
const { c } = constants;

export default (state = {}, action) => {
  switch (action.type) {
  case c.RECEIVE_SETTINGS:
    return action;

  default:
    return state;
  }
};
