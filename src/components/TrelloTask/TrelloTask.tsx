import React from "react";
import { container, title, description } from "./TrelloTask.css";

interface TrelloTaskProps {
  taskName: string;
  taskDescription: string;
}

const TrelloTask: React.FC<TrelloTaskProps> = ({
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
