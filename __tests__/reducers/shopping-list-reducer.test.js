import shoppingListReducer from './../../src/reducers/shopping-list-reducer';
import constants from './../../src/constants';
const { c } = constants;

describe('shoppingListReducer', () => {
  test('Should return default state if no action type is recognized', () => {
    expect(shoppingListReducer({}, { type: null })).toEqual({});
  });
});
