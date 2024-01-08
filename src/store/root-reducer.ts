import { combineReducers } from "redux";
import { authReducer, productsRedcuer } from "../reducers";

export const rootReducer = combineReducers({
  auth: authReducer,
  products: productsRedcuer
});