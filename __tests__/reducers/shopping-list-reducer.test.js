import shoppingListReducer from "./../../src/reducers/shopping-list-reducer";
import constants from "./../../src/constants";
const { c, initialState } = constants;

describe("shoppingListReducer", () => {
  let action;

  test("Should return default state if no action type is recognized", () => {
    expect(shoppingListReducer({}, { type: null })).toEqual({});
  });

  test("Should update a category of grocery items when received from Firebase", () => {
    action = {
      type: c.RECEIVE_CATEGORY,
      categoryId: "1234",
      category: {
        name: "Produce"
      },
      items: {
        checked: false,
        name: "bananas",
        timestamp: 1570655483258
      }
    }

    expect(shoppingListReducer(initialState.shoppingList, action)).toEqual({
      1234: {
        name: "Produce",
        items: {
          checked: false,
          name: "bananas",
          timestamp: 1570655483258
        }
      }
    });
  });

  test("Should update an item's checked status when received from Firebase", () => {
    const shoppingList = {
      1234: {
        name: "Produce",
        items: {
          4321: {
            checked: false,
            name: "bananas",
            timestamp: 1570655483258
          },
          1111: {
            checked: false,
            name: "potatoes",
            timestamp: 1837283718172
          }
        }
      }
    };

    action = {
      type: c.RECEIVE_ITEM,
      categoryId: "1234",
      itemId: "4321",
      checked: true
    };

    expect(shoppingListReducer(shoppingList, action)).toEqual({
      1234: {
        name: "Produce",
        items: {
          4321: {
            checked: true,
            name: "bananas",
            timestamp: 1570655483258
          },
          1111: {
            checked: false,
            name: "potatoes",
            timestamp: 1837283718172
          }
        }
      }
    });
  });
});
