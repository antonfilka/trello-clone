import React from "react";
import { list } from "../../types/types";
import TrelloActionButton from "../TrelloActionButton/TrelloActionButton";
import TrelloTask from "../TrelloTask/TrelloTask";
import { listWrapper, name } from "./TrelloList.css";

interface TrelloListProps {
  boardId: string;
  list: list;
}

const TrelloList: React.FC<TrelloListProps> = ({ boardId, list }) => {
  return (
    <div className={listWrapper}>
      <div className={name}>{list.listName}</div>
      {list.taskArray.map(task => (
        <TrelloTask
          key={task.taskId}
          taskName={task.taskName}
          taskDescription={task.taskDescription}
          boardId={boardId}
        />
      ))}
      <TrelloActionButton boardId={boardId} listId={list.listId} />
    </div>
  );
};

export default TrelloList;
