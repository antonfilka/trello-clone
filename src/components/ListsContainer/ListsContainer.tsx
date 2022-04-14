import React from "react";
import { useTypedSelector } from "../../hooks/reduxHooks";
import TrelloList from "../TrelloList/TrelloList";
import TrelloActionButton from "../TrelloActionButton/TrelloActionButton";
import { listsContainer } from "./ListsContainer.css";
import { list } from "../../types/types";

interface ListsContainerProps {
  boardId: string;
  lists: Array<list>;
}

const ListsContainer: React.FC<ListsContainerProps> = ({ boardId, lists }) => {
  return (
    <div className={listsContainer}>
      {lists.map(list => (
        <TrelloList key={list.listId} list={list} boardId={boardId} />
      ))}
      <TrelloActionButton list boardId={boardId} listId={""} />
    </div>
  );
};

export default ListsContainer;
