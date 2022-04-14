import React, { ChangeEvent, useState } from "react";
import {
  taskForm,
  listForm,
  button,
  input,
  buttons,
  close,
} from "./DropDownForm.css";
import { FiX } from "react-icons/fi";

// TODO add typing for setFormOpen

interface DropDownFormProps {
  setFormOpen: any;
  list?: boolean;
}

const DropDownForm: React.FC<DropDownFormProps> = ({ list, setFormOpen }) => {
  const [text, setText] = useState("");

  const formPlaceholder = list
    ? "Enter list title"
    : "Enter title for this task";
  const buttonTitle = list ? "Add list" : "Add task";

  const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const addBbuttonHandler = () => {
    setFormOpen(false);
  };

  const closeButtonHandler = () => {
    setFormOpen(false);
  };

  // TODO scalable textarea

  return (
    <div className={list ? listForm : taskForm}>
      <textarea
        className={input}
        placeholder={formPlaceholder}
        autoFocus
        onBlur={closeButtonHandler}
        onChange={handleTextChange}
      />
      <div className={buttons}>
        <button className={button} onClick={addBbuttonHandler}>
          {buttonTitle}
        </button>
        <FiX className={close} onClick={closeButtonHandler} />
      </div>
    </div>
  );
};

export default DropDownForm;
