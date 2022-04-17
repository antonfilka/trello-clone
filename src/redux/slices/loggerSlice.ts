import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { logItem } from "../../types/types";

type loggerState = {
  logArray: logItem[];
};

const initialState = {
  logArray: [],
};

const loggerSlice = createSlice({
  name: "logger",
  initialState,
  reducers: {
    addLog: (state: loggerState, { payload }: PayloadAction<logItem>) => {
      state.logArray.unshift(payload);
    },
  },
});

export const logger = loggerSlice.reducer;
export const { addLog } = loggerSlice.actions;
