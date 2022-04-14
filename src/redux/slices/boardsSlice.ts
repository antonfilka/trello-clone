import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { board, list, task } from "../../types/types";

type sortAction = {
  boardIndex: number;
  droppableIdStart: string;
  droppableIdEnd: string;
  droppableIndexStart: number;
  droppableIndexEnd: number;
  draggableId: string;
};

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
      boardId: "board-0",
      boardName: "First board",
      listArray: [
        {
          listId: "list-0",
          listName: "List 1",
          taskArray: [
            {
              taskId: "task-0",
              taskName: "Task 1",
              taskDescription: "Description",
              taskOwner: "Anton",
            },
            {
              taskId: "task-1",
              taskName: "Task 2",
              taskDescription: "Description",
              taskOwner: "Anton",
            },
            {
              taskId: "task-2",
              taskName: "Task 3",
              taskDescription: "Description",
              taskOwner: "Anton",
            },
          ],
        },
        {
          listId: "list-1",
          listName: "List 2",
          taskArray: [
            {
              taskId: "task-3",
              taskName: "Task 1",
              taskDescription: "Description",
              taskOwner: "Anton",
            },
            {
              taskId: "task-4",
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
    sort: (state: boardsState, { payload }: PayloadAction<sortAction>) => {
      // same list
      if (payload.droppableIdStart === payload.droppableIdEnd) {
        const list: any = state.boardArray[payload.boardIndex].listArray.find(
          list => payload.droppableIdStart === list.listId
        );
        const card = list.taskArray.splice(payload.droppableIndexStart, 1);
        list?.taskArray.splice(payload.droppableIndexEnd, 0, ...card);
      }

      // other list
      if (payload.droppableIdStart !== payload.droppableIdEnd) {
        const listStart: any = state.boardArray[
          payload.boardIndex
        ].listArray.find(list => payload.droppableIdStart === list.listId);
        const card = listStart.taskArray.splice(payload.droppableIndexStart, 1);
        const listEnd: any = state.boardArray[
          payload.boardIndex
        ].listArray.find(list => payload.droppableIdEnd === list.listId);
        listEnd.taskArray.splice(payload.droppableIndexEnd, 0, ...card);
      }
    },
  },
});

export const boards = boardsSlice.reducer;
export const { addBoard, addList, addTask, sort } = boardsSlice.actions;
