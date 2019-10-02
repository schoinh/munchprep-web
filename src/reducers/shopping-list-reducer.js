import constants from "./../constants";
const { c } = constants;

export default (state = {}, action) => {
  let newState;

  switch (action.type) {
  case c.RECEIVE_CATEGORY:
    newState = Object.assign({}, state);
    newState[action.categoryId] = {
      name: action.category.name,
      items: action.items
    };
    return newState;

  default:
    return state;
  }
};
