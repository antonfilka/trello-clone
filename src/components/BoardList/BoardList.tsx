import React, { useState } from "react";
import {
  addButton,
  addSection,
  boardItem,
  boardItemActive,
  container,
  smallTitle,
  title,
} from "./BoardList.css";
import { FiPlusCircle } from "react-icons/fi";
import { useTypedSelector } from "../../hooks/reduxHooks";
import SideForm from "./SideForm/SideForm";
import clsx from "clsx";

// TODO types

interface BoardListProps {
  activeBoard: number;
  setActiveBoard: any;
}

const BoardList: React.FC<BoardListProps> = ({
  setActiveBoard,
  activeBoard,
}) => {
  const [formOpen, setFormOpen] = useState(false);
  const boards = useTypedSelector(state => state.boards.boardArray);

  const addButtonHandler = () => {
    setFormOpen(!formOpen);
  };

  const handleChooseBoard = (id: number) => {
    setActiveBoard(id);
  };

  return (
    <div className={container}>
      <div className={title}>Boards: </div>
      {boards.map((board, index) => (
        <div
          className={clsx(
            {
              [boardItemActive]: activeBoard === index,
            },
            {
              [boardItem]: activeBoard !== index,
            }
          )}
          key={board.boardId}
        >
          <div onClick={() => handleChooseBoard(index)}>{board.boardName}</div>
        </div>
      ))}
      <div className={addSection}>
        {formOpen ? (
          <SideForm setFormOpen={setFormOpen} />
        ) : (
          <>
            <div className={smallTitle}>Create new board </div>
            <FiPlusCircle className={addButton} onClick={addButtonHandler} />
          </>
        )}
      </div>
    </div>
  );
};

export default BoardList;
