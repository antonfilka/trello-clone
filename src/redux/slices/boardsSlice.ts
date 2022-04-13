import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { board, list } from "../../types/types";

type removeBoardPayload = {
  boardId: number;
};

type addListPayload = {
  boardId: number;
  listItem: list;
};

export type boardsState = {
  boardArray: board[];
};

const initialState: boardsState = {
  boardArray: [],
};

const boardsSlice = createSlice({
  name: "boards",
  initialState,
  reducers: {
    addBoard: (state: boardsState, { payload }: PayloadAction<board>) => {
      state.boardArray.push({ ...payload });
    },

    removeBoard: (
      state: boardsState,
      { payload }: PayloadAction<removeBoardPayload>
    ) => {
      state.boardArray.filter(board => board.boardId !== payload.boardId);
    },
  },
});

export const boards = boardsSlice.reducer;
export const { addBoard, removeBoard } = boardsSlice.actions;
