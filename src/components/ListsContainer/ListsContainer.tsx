import React from "react";
import { useTypedSelector } from "../../hooks/reduxHooks";
import TrelloList from "../TrelloList/TrelloList";
import TrelloActionButton from "../TrelloActionButton/TrelloActionButton";
import { listsContainer } from "./ListsContainer.css";

const ListsContainer = () => {
  const lists = useTypedSelector(state => state.boards.boardArray[0].listArray);
  return (
    <div className={listsContainer}>
      {lists.map(list => (
        <TrelloList
          key={list.listId}
          title={list.listName}
          tasks={list.taskArray}
        />
      ))}
      <TrelloActionButton list />
    </div>
  );
};

export default ListsContainer;
