import { combineReducers } from "redux";
import authReducer from "./authReducer";
import transactionReducer from "./transactionReducer";
import accountReducer from "./accountReducer";

const rootReducer = combineReducers({
  authReducer,
  transactionReducer,
  accountReducer
});

export default rootReducer;
