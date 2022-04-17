import React, { useState } from "react";
import { IoIosAdd } from "react-icons/io";
import { list } from "../../types/types";
import DropDownForm from "./DropDownForm/DropDownForm";
import { taskButton, listButton } from "./TrelloActionButton.css";

interface TrelloActionButtonProps {
  boardId: string;
  listId: string;
  list?: boolean;
}

const TrelloActionButton: React.FC<TrelloActionButtonProps> = ({
  listId,
  boardId,
  list,
}) => {
  const [formOpen, setFormOpen] = useState(false);
  const buttonText = list ? "Add another list" : "Add new task";

  const buttonHandler = () => {
    setFormOpen(true);
  };

  return formOpen ? (
    <DropDownForm
      setFormOpen={setFormOpen}
      list={list ? true : false}
      boardId={boardId}
      listId={listId}
    />
  ) : (
    <div className={list ? listButton : taskButton} onClick={buttonHandler}>
      <IoIosAdd />
      <p>{buttonText}</p>
    </div>
  );
};

export default TrelloActionButton;
