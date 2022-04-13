import { combineReducers } from "@reduxjs/toolkit";
import { boardsReducer } from "../slices/boardsSlice";
import { loggerReducer } from "../slices/loggerSlice";

const reducer = {
  loggerReducer,
  boardsReducer,
};

export default reducer;
