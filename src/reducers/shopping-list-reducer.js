import constants from "./../constants";
const { c } = constants;

export default (state = {}, action) => {
  let newState;

  switch (action.type) {
  case c.GET_ITEM:
    newState = Object.assign({}, state);
    newState[action.item.id] = action.item;
    return newState;

  default:
    return state;
  }
};
