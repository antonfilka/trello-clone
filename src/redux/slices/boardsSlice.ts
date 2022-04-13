import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { board } from "../../types/types";

type addBoardPayload = {
  boardItem: board;
};

type removeBoardPayload = {
  boardId: number;
};

type boardsState = {
  boardArray: board[];
};

const initialState = {
  boardArray: [],
};

const boardsSlice = createSlice({
  name: "boards",
  initialState: initialState,
  reducers: {
    addBoard: (
      state: boardsState,
      { payload }: PayloadAction<addBoardPayload>
    ) => {
      state.boardArray.push(payload.boardItem);
    },
    removeBoard: (
      state: boardsState,
      { payload }: PayloadAction<removeBoardPayload>
    ) => {
      state.boardArray.filter(board => board.boardId !== payload.boardId);
    },
  },
});

export const boardsReducer = boardsSlice.reducer;
export const { addBoard, removeBoard } = boardsSlice.actions;
