import React from "react";
import { container, title, description } from "./TrelloTask.css";
import { Draggable } from "react-beautiful-dnd";

interface TrelloTaskProps {
  index: number;
  id: string;
  boardId: string;
  taskName: string;
  taskDescription: string;
}

const TrelloTask: React.FC<TrelloTaskProps> = ({
  index,
  id,
  boardId,
  taskName,
  taskDescription,
}) => {
  return (
    <Draggable draggableId={id} index={index}>
      {provided => (
        <div
          className={container}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className={title}>{taskName}</div>
          <div className={description}>{taskDescription}</div>
        </div>
      )}
    </Draggable>
  );
};

export default TrelloTask;
