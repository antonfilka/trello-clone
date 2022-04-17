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

interface BoardListProps {
  activeBoardId: string;
  setActiveBoardId: any;
}

const BoardList: React.FC<BoardListProps> = ({
  setActiveBoardId,
  activeBoardId,
}) => {
  const [formOpen, setFormOpen] = useState(false);
  const boards = useTypedSelector(state => state.boards.boardArray);

  const addButtonHandler = () => {
    setFormOpen(!formOpen);
  };

  const handleChooseBoard = (index: number) => {
    setActiveBoardId(boards[index].boardId);
  };

  return (
    <div className={container}>
      <div className={title}>Boards: </div>
      {boards.map((board, index) => (
        <div
          className={clsx(
            {
              [boardItemActive]:
                boards.findIndex(board => board.boardId === activeBoardId) ===
                index,
            },
            {
              [boardItem]:
                boards.findIndex(board => board.boardId === activeBoardId) !==
                index,
            }
          )}
          key={board.boardId}
          onClick={() => handleChooseBoard(index)}
        >
          {board.boardName}
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
