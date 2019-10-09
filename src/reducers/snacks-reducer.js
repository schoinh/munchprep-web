import constants from "./../constants";
const { c, initialState } = constants;

export default (state = initialState.snacks, action) => {
  switch (action.type) {
  case c.RECEIVE_SNACKS:
    return action.snacks;

  default:
    return state;
  }
};
