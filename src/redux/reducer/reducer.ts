import { combineReducers } from "@reduxjs/toolkit";
import { boards } from "../slices/boardsSlice";
import { logger } from "../slices/loggerSlice";
import { modal } from "../slices/modalSlice";

const reducer = {
  logger,
  boards,
  modal,
};

export default reducer;
