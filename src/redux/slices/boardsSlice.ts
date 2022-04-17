import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { board, list, task } from "../../types/types";
import { addLog } from "./loggerSlice";

type deleteBoardAction = {
  boardId: string;
};

type deleteListAction = {
  boardId: string;
  listId: string;
};

type deleteTaskAction = {
  boardId: string;
  listId: string;
  taskId: string;
};

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
  modalActive: boolean;
  boardArray: board[];
};

const initialState: boardsState = {
  modalActive: false,
  boardArray: [
    {
      boardId: "board-0",
      boardName: "First board",
      lists: [
        {
          listId: "list-0",
          listName: "List 1",
          tasks: [
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
          tasks: [
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
          ? { ...board, lists: board.lists.push(payload.list) }
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
              lists: board.lists.map(list =>
                list.listId === payload.listId
                  ? { ...list, tasks: list.tasks.push(payload.task) }
                  : list
              ),
            }
          : board
      );
    },
    sort: (state: boardsState, { payload }: PayloadAction<sortAction>) => {
      // same list
      if (payload.droppableIdStart === payload.droppableIdEnd) {
        const list: any = state.boardArray[payload.boardIndex].lists.find(
          list => payload.droppableIdStart === list.listId
        );
        const card = list.tasks.splice(payload.droppableIndexStart, 1);
        list?.tasks.splice(payload.droppableIndexEnd, 0, ...card);
      }

      // other list
      if (payload.droppableIdStart !== payload.droppableIdEnd) {
        const listStart: any = state.boardArray[payload.boardIndex].lists.find(
          list => payload.droppableIdStart === list.listId
        );
        const card = listStart.tasks.splice(payload.droppableIndexStart, 1);
        const listEnd: any = state.boardArray[payload.boardIndex].lists.find(
          list => payload.droppableIdEnd === list.listId
        );
        listEnd.tasks.splice(payload.droppableIndexEnd, 0, ...card);
      }
    },

    updateTask: (
      state: boardsState,
      { payload }: PayloadAction<addTaskAction>
    ) => {
      state.boardArray = state.boardArray.map(board =>
        board.boardId === payload.boardId
          ? {
              ...board,
              lists: board.lists.map(list =>
                list.listId === payload.listId
                  ? {
                      ...list,
                      tasks: list.tasks.map(task =>
                        task.taskId === payload.task.taskId
                          ? payload.task
                          : task
                      ),
                    }
                  : list
              ),
            }
          : board
      );
    },

    deleteTask: (
      state: boardsState,
      { payload }: PayloadAction<deleteTaskAction>
    ) => {
      state.boardArray = state.boardArray.map(board =>
        board.boardId === payload.boardId
          ? {
              ...board,
              lists: board.lists.map(list =>
                list.listId === payload.listId
                  ? {
                      ...list,
                      tasks: list.tasks.filter(
                        task => task.taskId !== payload.taskId
                      ),
                    }
                  : list
              ),
            }
          : board
      );
    },

    deleteList: (
      state: boardsState,
      { payload }: PayloadAction<deleteListAction>
    ) => {
      state.boardArray = state.boardArray.map(board =>
        board.boardId === payload.boardId
          ? {
              ...board,
              lists: board.lists.filter(list => list.listId !== payload.listId),
            }
          : board
      );
    },

    deleteBoard: (
      state: boardsState,
      { payload }: PayloadAction<deleteBoardAction>
    ) => {
      state.boardArray = state.boardArray.filter(
        board => board.boardId !== payload.boardId
      );
    },

    setModalActive: (
      state: boardsState,
      { payload }: PayloadAction<boolean>
    ) => {
      state.modalActive = payload;
    },
  },
});

export const boards = boardsSlice.reducer;
export const {
  addBoard,
  addList,
  addTask,
  sort,
  setModalActive,
  updateTask,
  deleteTask,
  deleteList,
  deleteBoard,
} = boardsSlice.actions;
