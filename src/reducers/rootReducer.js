import { combineReducers } from "redux";
import transactionReducer from "./transactionReducer";
import accountReducer from "./accountReducer";

const rootReducer = combineReducers({
  transactionReducer,
  accountReducer
});

export default rootReducer;
