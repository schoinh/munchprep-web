import shoppingListReducer from "./shopping-list-reducer";
import authReducer from "./auth-reducer";
import snacksReducer from "./snacks-reducer";
import menuReducer from "./menu-reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  isAuthenticated: authReducer,
  shoppingList: shoppingListReducer,
  snacks: snacksReducer,
  menu: menuReducer
});

export default rootReducer;
