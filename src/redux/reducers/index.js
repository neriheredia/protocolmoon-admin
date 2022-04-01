import { combineReducers } from "@reduxjs/toolkit";
import ordersReducers from "./ordesReducers";

const rootReducer = combineReducers({ orders: ordersReducers });

export default rootReducer;
