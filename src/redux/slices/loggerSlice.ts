import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { logItem } from "../../types/types";

type TPayload = {
  logItem: logItem;
};

type loggerState = {
  logArray: logItem[];
};

const initialState = {
  logArray: [],
};

const loggerSlice = createSlice({
  name: "logger",
  initialState: initialState,
  reducers: {
    addLog: (state: loggerState, { payload }: PayloadAction<TPayload>) => {
      state.logArray.push(payload.logItem);
    },
  },
});

export const loggerReducer = loggerSlice.reducer;
export const { addLog } = loggerSlice.actions;
