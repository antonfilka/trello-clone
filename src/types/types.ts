export interface task {
  taskId: string;
  taskName: string;
  taskDescription: string;
  taskOwner: string;
}

export interface list {
  listId: string;
  listName: string;
  tasks: task[];
}

export interface board {
  boardId: string;
  boardName: string;
  lists: list[];
}

export interface logItem {
  logId: string;
  logAuthor: string;
  logMessage: string;
  logTimestamp: string;
}
