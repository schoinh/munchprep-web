import constants from "./../constants";
const { c, initialState } = constants;

export default (state = initialState.settings, action) => {
  let newState;

  switch (action.type) {
  case c.RECEIVE_AUTO_ADD:
    newState = Object.assign({}, state);
    newState.autoAdd = action.autoAdd;
    return newState;

  default:
    return state;
  }
};
