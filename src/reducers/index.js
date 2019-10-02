// import selectedTicketReducer from './selected-ticket-reducer';
import shoppingListReducer from "./shopping-list-reducer";
import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
  // selectedTicket: selectedTicketReducer,
  masterShoppingList: shoppingListReducer,
  firebaseAuth: firebaseReducer
});

export default rootReducer;
