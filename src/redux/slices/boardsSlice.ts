import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { board, list } from "../../types/types";

export type boardsState = {
  boardArray: board[];
};

const initialState: boardsState = {
  boardArray: [
    {
      boardId: 0,
      listArray: [
        {
          listId: 0,
          listName: "List 1",
          taskArray: [
            {
              taskId: 0,
              taskName: "Task 1",
              taskDescription: "Description",
              taskOwner: "Anton",
            },
            {
              taskId: 1,
              taskName: "Task 2",
              taskDescription: "Description",
              taskOwner: "Anton",
            },
            {
              taskId: 2,
              taskName: "Task 3",
              taskDescription: "Description",
              taskOwner: "Anton",
            },
          ],
        },
        {
          listId: 1,
          listName: "List 2",
          taskArray: [
            {
              taskId: 0,
              taskName: "Task 1",
              taskDescription: "Description",
              taskOwner: "Anton",
            },
            {
              taskId: 1,
              taskName: "Task 2",
              taskDescription: "Description",
              taskOwner: "Anton",
            },
          ],
        },
      ],
    },
  ],
};

const boardsSlice = createSlice({
  name: "boards",
  initialState,
  reducers: {
    addBoard: (state: boardsState, { payload }: PayloadAction<board>) => {
      state.boardArray.push({ ...payload });
    },
  },
});

export const boards = boardsSlice.reducer;
export const { addBoard } = boardsSlice.actions;
