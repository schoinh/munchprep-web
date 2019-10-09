import constants from "./../constants";
const { c, initialState } = constants;

export default (state = initialState.menu, action) => {
  let newState;

  switch (action.type) {
    case c.RECEIVE_MEALS:
      newState = Object.assign({}, state);
      newState[action.dayId] = {
        dayName: action.dayName,
        meals: action.meals
      };
      return newState;

    default:
      return state;
  }
};
