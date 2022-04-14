import React from "react";
import { list } from "../../types/types";
import TrelloActionButton from "../TrelloActionButton/TrelloActionButton";
import TrelloTask from "../TrelloTask/TrelloTask";
import { listWrapper, name } from "./TrelloList.css";
import { Droppable } from "react-beautiful-dnd";

interface TrelloListProps {
  boardId: string;
  list: list;
}

const TrelloList: React.FC<TrelloListProps> = ({ boardId, list }) => {
  return (
    <Droppable droppableId={list.listId}>
      {provided => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          className={listWrapper}
        >
          <div className={name}>{list.listName}</div>
          {list.taskArray.map((task, index) => (
            <TrelloTask
              key={task.taskId}
              taskName={task.taskName}
              taskDescription={task.taskDescription}
              boardId={boardId}
              id={task.taskId}
              index={index}
            />
          ))}
          {provided.placeholder}
          <TrelloActionButton boardId={boardId} listId={list.listId} />
        </div>
      )}
    </Droppable>
  );
};

export default TrelloList;
