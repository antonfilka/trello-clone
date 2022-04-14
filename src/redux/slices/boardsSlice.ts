import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { board, list, task } from "../../types/types";

type addBoardAction = {
  board: board;
};

type addTaskAction = {
  boardId: string;
  listId: string;
  task: task;
};

type addListAction = {
  boardId: string;
  list: list;
};

export type boardsState = {
  boardArray: board[];
};

const initialState: boardsState = {
  boardArray: [
    {
      boardId: "0",
      boardName: "First board",
      listArray: [
        {
          listId: "0",
          listName: "List 1",
          taskArray: [
            {
              taskId: " 0",
              taskName: "Task 1",
              taskDescription: "Description",
              taskOwner: "Anton",
            },
            {
              taskId: "1",
              taskName: "Task 2",
              taskDescription: "Description",
              taskOwner: "Anton",
            },
            {
              taskId: " 2",
              taskName: "Task 3",
              taskDescription: "Description",
              taskOwner: "Anton",
            },
          ],
        },
        {
          listId: "1",
          listName: "List 2",
          taskArray: [
            {
              taskId: "0",
              taskName: "Task 1",
              taskDescription: "Description",
              taskOwner: "Anton",
            },
            {
              taskId: "1",
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
    addBoard: (
      state: boardsState,
      { payload }: PayloadAction<addBoardAction>
    ) => {
      state.boardArray.push(payload.board);
    },

    addList: (
      state: boardsState,
      { payload }: PayloadAction<addListAction>
    ) => {
      state.boardArray.map(board =>
        board.boardId === payload.boardId
          ? { ...board, listArray: board.listArray.push(payload.list) }
          : board
      );
    },

    addTask: (
      state: boardsState,
      { payload }: PayloadAction<addTaskAction>
    ) => {
      state.boardArray.map(board =>
        board.boardId === payload.boardId
          ? {
              ...board,
              listArray: board.listArray.map(list =>
                list.listId === payload.listId
                  ? { ...list, taskArray: list.taskArray.push(payload.task) }
                  : list
              ),
            }
          : board
      );
    },
  },
});

export const boards = boardsSlice.reducer;
export const { addBoard, addList, addTask } = boardsSlice.actions;
