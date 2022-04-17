import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { task } from "../../types/types";

type setModalDataAction = {
  boardId?: string;
  listId?: string;
  task?: task;
};

type modalState = {
  boardId?: string;
  listId?: string;
  task?: task;
};

const initialState = {
  boardId: "board-0",
  listId: "list-0",
  task: {
    taskId: "task-0",
    taskName: "task 0",
    taskDescription: "description",
    taskOwner: "Anton",
  },
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setModalData: (
      state: modalState,
      { payload }: PayloadAction<setModalDataAction>
    ) => {
      state.boardId = payload.boardId;
      state.listId = payload.listId;
      state.task = payload.task;
    },
  },
});

export const modal = modalSlice.reducer;
export const { setModalData } = modalSlice.actions;
