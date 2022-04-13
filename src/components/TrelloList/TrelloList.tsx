import React from "react";
import { task } from "../../types/types";
import TrelloTask from "../TrelloTask/TrelloTask";
import { container, T2 } from "./TrelloList.css";

interface TrelloListProps {
  title: string;
  tasks: task[];
}

const TrelloList: React.FC<TrelloListProps> = ({ title, tasks }) => {
  return (
    <div className={container}>
      <div className={T2}>{title}</div>
      {tasks.map(task => (
        <TrelloTask
          key={task.taskId}
          taskName={task.taskName}
          taskDescription={task.taskDescription}
        />
      ))}
    </div>
  );
};

export default TrelloList;
