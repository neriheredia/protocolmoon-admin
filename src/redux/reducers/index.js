import { combineReducers } from "@reduxjs/toolkit";
import ordersReducers from "./ordesReducers";
import loginReducers from "./loginReducers";

const rootReducer = combineReducers({ orders: ordersReducers, user: loginReducers });

export default rootReducer;
