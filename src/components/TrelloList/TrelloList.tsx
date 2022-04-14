import React from "react";
import { task } from "../../types/types";
import TrelloActionButton from "../TrelloActionButton/TrelloActionButton";
import TrelloTask from "../TrelloTask/TrelloTask";
import { list, name } from "./TrelloList.css";

interface TrelloListProps {
  title: string;
  tasks: task[];
}

const TrelloList: React.FC<TrelloListProps> = ({ title, tasks }) => {
  return (
    <div className={list}>
      <div className={name}>{title}</div>
      {tasks.map(task => (
        <TrelloTask
          key={task.taskId}
          taskName={task.taskName}
          taskDescription={task.taskDescription}
        />
      ))}
      <TrelloActionButton />
    </div>
  );
};

export default TrelloList;
