import React from "react";
import { list } from "../../types/types";
import TrelloActionButton from "../TrelloActionButton/TrelloActionButton";
import TrelloTask from "../TrelloTask/TrelloTask";
import { deleteButton, header, listWrapper, name } from "./TrelloList.css";
import { Droppable } from "react-beautiful-dnd";
import { useTypedDispatch } from "../../hooks/reduxHooks";
import { deleteList, setModalActive } from "../../redux/slices/boardsSlice";
import { setModalData } from "../../redux/slices/modalSlice";
import { GrSubtract } from "react-icons/gr";
import { addLog } from "../../redux/slices/loggerSlice";
import { v4 } from "uuid";

interface TrelloListProps {
  boardId: string;
  list: list;
}

interface handleTaskChangeProps {
  boardId: string;
  listId: string;
  taskId: string;
}

const TrelloList: React.FC<TrelloListProps> = ({ boardId, list }) => {
  const dispatch = useTypedDispatch();

  const handleTaskChange = (
    boardId: string,
    listId: string,
    taskId: string,
    task: any
  ): void => {
    dispatch(setModalData({ boardId, listId, task }));
    dispatch(setModalActive(true));
  };

  const handleListDelete = (listId: string) => {
    dispatch(deleteList({ boardId, listId }));
    dispatch(
      addLog({
        logId: v4(),
        logMessage: `Delete list: ${list.listName}`,
        logAuthor: "User",
        logTimestamp: String(Date.now()),
      })
    );
  };

  return (
    <Droppable droppableId={list.listId}>
      {provided => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          className={listWrapper}
        >
          <div className={header}>
            <div className={name}>{list.listName}</div>
            <GrSubtract
              className={deleteButton}
              onClick={() => handleListDelete(list.listId)}
            />
          </div>
          {list.tasks.map((task, index) => (
            <div
              onClick={() =>
                handleTaskChange(boardId, list.listId, task.taskId, task)
              }
              key={task.taskId}
            >
              <TrelloTask
                taskName={task.taskName}
                taskDescription={task.taskDescription}
                boardId={boardId}
                id={task.taskId}
                index={index}
              />
            </div>
          ))}
          {provided.placeholder}
          <TrelloActionButton boardId={boardId} listId={list.listId} />
        </div>
      )}
    </Droppable>
  );
};

export default TrelloList;
