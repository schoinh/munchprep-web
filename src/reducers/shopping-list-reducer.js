import constants from "./../constants";
const { c } = constants;

export default (state = {}, action) => {
  let newState;

  switch (action.type) {
    case c.RECEIVE_CATEGORY:
      newState = Object.assign({}, state);
      console.log("action.category: ", action.category);
      console.log("action.category.timestamp: ", action.category.timestamp);
      newState[action.category.timestamp] = {
        name: action.category.name,
        items: action.items
      };
      return newState;

    default:
      return state;
  }
};
