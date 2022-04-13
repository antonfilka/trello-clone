import { combineReducers } from "@reduxjs/toolkit";
import { boards } from "../slices/boardsSlice";
import { logger } from "../slices/loggerSlice";

const reducer = {
  logger,
  boards,
};

export default reducer;
