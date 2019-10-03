// import selectedTicketReducer from './selected-ticket-reducer';
import shoppingListReducer from "./shopping-list-reducer";
import authReducer from "./auth-reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  // selectedTicket: selectedTicketReducer,
  masterShoppingList: shoppingListReducer,
  isAuthenticated: authReducer
});

export default rootReducer;
