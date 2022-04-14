import { useState } from "react";
import { useTypedSelector } from "../hooks/reduxHooks";
import { appContainer } from "./App.css";
import BoardList from "./BoardList/BoardList";
import ListsContainer from "./ListsContainer/ListsContainer";
import { DragDropContext } from "react-beautiful-dnd";

const App = () => {
  const [activeBoard, setActiveBoard] = useState(0);
  const boards = useTypedSelector(state => state.boards.boardArray);

  const onDragEnd = () => {
    // TODO sorting logic
  };

  return (
    <div className={appContainer}>
      <BoardList setActiveBoard={setActiveBoard} activeBoard={activeBoard} />
      <DragDropContext onDragEnd={onDragEnd}>
        <ListsContainer
          lists={boards[activeBoard].listArray}
          boardId={boards[activeBoard].boardId}
        />
      </DragDropContext>
    </div>
  );
};

export default App;
