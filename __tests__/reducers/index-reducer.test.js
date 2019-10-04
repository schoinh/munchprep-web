import rootReducer from "./../../src/reducers/index";
import shoppingListReducer from "./../../src/reducers/shopping-list-reducer";
import authReducer from "./../../src/reducers/auth-reducer";
import { createStore } from "redux";

let store = createStore(rootReducer);

describe("rootReducer", () => {

  test("Should return default state if no action type is recognized", () => {
    expect(rootReducer({}, { type: null })).toEqual({
      isAuthenticated: false,
      masterShoppingList: {}
    });
  });

  test("Should contain shoppingListReducer logic", () => {
    expect(store.getState().masterShoppingList).toEqual(shoppingListReducer(undefined, { type: null }));
  });

  test("Should contain authReducer logic", () => {
    expect(store.getState().isAuthenticated).toEqual(authReducer(undefined, { type: null }));
  });
});
