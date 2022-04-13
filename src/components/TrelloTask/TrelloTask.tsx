import React from "react";
import { container, T2, T4 } from "./TrelloTask.css";

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
      <div className={T2}>{taskName}</div>
      <div className={T4}>{taskDescription}</div>
    </div>
  );
};

export default TrelloTask;
