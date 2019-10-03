import shoppingListReducer from "./shopping-list-reducer";
import authReducer from "./auth-reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  masterShoppingList: shoppingListReducer,
  isAuthenticated: authReducer
});

export default rootReducer;
