import React, { ChangeEvent, useState } from "react";
import { icon, input, sideForm } from "./SideForm.css";
import { FiCheck } from "react-icons/fi";
import { useTypedDispatch } from "../../../hooks/reduxHooks";
import { addBoard } from "../../../redux/slices/boardsSlice";
import { v4 as uuidv4, v4 } from "uuid";

// TODO function typing

interface SideFormProps {
  setFormOpen: any;
}

const SideForm: React.FC<SideFormProps> = ({ setFormOpen }) => {
  const [text, setText] = useState("");
  const dispatch = useTypedDispatch();

  const handleOnBlur = () => {
    setFormOpen(false);
  };

  const handleAddBoard = () => {
    text
      ? dispatch(
          addBoard({ board: { boardId: v4(), boardName: text, listArray: [] } })
        )
      : null;
    setFormOpen(false);
  };

  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <div className={sideForm}>
      <input
        type="text"
        autoFocus
        onBlur={handleOnBlur}
        className={input}
        onChange={handleTextChange}
        placeholder="Enter new board name"
      />
      <FiCheck className={icon} onMouseDown={handleAddBoard} />
    </div>
  );
};

export default SideForm;
