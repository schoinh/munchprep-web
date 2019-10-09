import constants from "./../constants";
const { c, initialState } = constants;

export default (state = initialState.menu, action) => {
  switch (action.type) {
  // case c.RECEIVE_SNACKS:
  //   return action.menu;

  default:
    return state;
  }
};
