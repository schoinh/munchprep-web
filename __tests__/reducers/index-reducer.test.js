import rootReducer from "./../../src/reducers/index";
import shoppingListReducer from "./../../src/reducers/shopping-list-reducer";
import authReducer from "./../../src/reducers/auth-reducer";
import snacksReducer from "./../../src/reducers/snacks-reducer";
import { createStore } from "redux";

let store = createStore(rootReducer);

describe("rootReducer", () => {

  test("Should return default state if no action type is recognized", () => {
    expect(rootReducer({}, { type: null })).toEqual({
      isAuthenticated: false,
      shoppingList: {},
      snacks: "...",
      menu: {}
    });
  });

  test("Should contain shoppingListReducer logic", () => {
    expect(store.getState().shoppingList).toEqual(shoppingListReducer(undefined, { type: null }));
  });

  test("Should contain authReducer logic", () => {
    expect(store.getState().isAuthenticated).toEqual(authReducer(undefined, { type: null }));
  });

  test("Should contain snacksReducer logic", () => {
    expect(store.getState().snacks).toEqual(snacksReducer(undefined, { type: null }));
  });
});
