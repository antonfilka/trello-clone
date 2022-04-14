import React from "react";
import { container, title, description } from "./TrelloTask.css";

interface TrelloTaskProps {
  boardId: string;
  taskName: string;
  taskDescription: string;
}

const TrelloTask: React.FC<TrelloTaskProps> = ({
  boardId,
  taskName,
  taskDescription,
}) => {
  return (
    <div className={container}>
      <div className={title}>{taskName}</div>
      <div className={description}>{taskDescription}</div>
    </div>
  );
};

export default TrelloTask;
