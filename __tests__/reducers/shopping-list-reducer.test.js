import shoppingListReducer from './../../src/reducers/shopping-list-reducer';
import constants from './../../src/constants';
const { c } = constants;

describe('shoppingListReducer', () => {
  let action;
  const sampleShoppingList = {
    1: {
      name: "Produce",
      timestamp: 1000,
      items: {
        11: {
          name: "broccoli",
          checked: false,
          timestamp: 10000
        }
      }
    }
  };

  test('Should return default state if no action type is recognized', () => {
    expect(shoppingListReducer({}, { type: null })).toEqual({});
  });

  test('Should change item state to checked when user clicks empty checkbox', () => {
    action = {
      type: c.TOGGLE_CHECKED,
      categoryId: 1,
      itemId: 11
    };

    expect(shoppingListReducer(sampleShoppingList, action)).toEqual({
      1: {
        name: "Produce",
        timestamp: 1000,
        items: {
          11: {
            name: "broccoli",
            checked: true,
            timestamp: 10000
          }
        }
      }
    });
  });

  test('Should change item state to unchecked when user unchecks item', () => {
    action = {
      type: c.TOGGLE_CHECKED,
      categoryId: 1,
      itemId: 11
    };

    expect(shoppingListReducer(sampleShoppingList, action)).toEqual({
      1: {
        name: "Produce",
        timestamp: 1000,
        items: {
          11: {
            name: "broccoli",
            checked: false,
            timestamp: 10000
          }
        }
      }
    });
  })
});
