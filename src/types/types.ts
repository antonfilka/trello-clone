export interface task {
  taskId: number;
  taskName: string;
  taskDescription: string;
  taskOwner: string;
}

export interface list {
  listId: number;
  listName: string;
  taskArray: task[];
}

export interface board {
  boardId: number;
  listArray: list[];
}

export interface logItem {
  logId: number;
  logAuthor: string;
  logMessage: string;
  logTimestamp: string;
}
