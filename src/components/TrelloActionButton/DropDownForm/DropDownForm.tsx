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
import { useTypedDispatch } from "../../../hooks/reduxHooks";
import { addList, addTask } from "../../../redux/slices/boardsSlice";
import { v4 as uuidv4, v4 } from "uuid";
import { addLog } from "../../../redux/slices/loggerSlice";

// TODO add typing for setFormOpen

interface DropDownFormProps {
  boardId: string;
  listId: string;
  setFormOpen: any;
  list?: boolean;
}

const DropDownForm: React.FC<DropDownFormProps> = ({
  boardId,
  listId,
  list,
  setFormOpen,
}) => {
  const dispatch = useTypedDispatch();
  const [text, setText] = useState("");

  const formPlaceholder = list
    ? "Enter list title"
    : "Enter title for this task";
  const buttonTitle = list ? "Add list" : "Add task";

  const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const addBbuttonHandler = () => {
    if (text) {
      if (list) {
        dispatch(
          addList({
            boardId,
            list: { listId: v4(), listName: text, taskArray: [] },
          })
        );
        dispatch(
          addLog({
            logId: v4(),
            logMessage: `Create list: ${text}`,
            logAuthor: "Anton",
            logTimestamp: String(Date.now()),
          })
        );
      } else {
        dispatch(
          addTask({
            boardId,
            listId,
            task: {
              taskId: v4(),
              taskName: text,
              taskDescription: "",
              taskOwner: "Anton",
            },
          })
        );
        dispatch(
          addLog({
            logId: v4(),
            logMessage: `Create task: ${text}`,
            logAuthor: "Anton",
            logTimestamp: String(Date.now()),
          })
        );
      }
    }
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
        <button className={button} onMouseDown={addBbuttonHandler}>
          {buttonTitle}
        </button>
        <FiX className={close} onClick={closeButtonHandler} />
      </div>
    </div>
  );
};

export default DropDownForm;
