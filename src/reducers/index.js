// import selectedTicketReducer from './selected-ticket-reducer';
import shoppingListReducer from "./shopping-list-reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  // selectedTicket: selectedTicketReducer,
  masterShoppingList: shoppingListReducer
});

export default rootReducer;
