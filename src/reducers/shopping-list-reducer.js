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
      newState = Object.assign({}, state);
      let checkedStatus = newState[action.categoryId].items[action.itemId].checked;
      if (checkedStatus == false) {
        newState[action.categoryId].items[action.itemId].checked = true;
      } else {
        newState[action.categoryId].items[action.itemId].checked = false;
      }
      return newState;

    default:
      return state;
  }
};
