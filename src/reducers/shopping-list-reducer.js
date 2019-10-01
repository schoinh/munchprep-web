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

    case c.TOGGLE_CHECKED:
      const { categoryId, itemId } = action;
      newState = Object.assign({}, state);
      if (newState[categoryId].items[itemId].checked == false) {
        newState[categoryId].items[itemId].checked = true;
      } else {
        newState[categoryId].items[itemId].checked = false;
      }
      return newState;

    default:
      return state;
  }
};
