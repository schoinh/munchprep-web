import shoppingListReducer from "./shopping-list-reducer";
import authReducer from "./auth-reducer";
import snacksReducer from "./snacks-reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  isAuthenticated: authReducer,
  masterShoppingList: shoppingListReducer,
  snacks: snacksReducer
});

export default rootReducer;
