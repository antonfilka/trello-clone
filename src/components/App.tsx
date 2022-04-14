import { useState } from "react";
import { useTypedDispatch, useTypedSelector } from "../hooks/reduxHooks";
import { appContainer } from "./App.css";
import BoardList from "./BoardList/BoardList";
import ListsContainer from "./ListsContainer/ListsContainer";
import { DragDropContext } from "react-beautiful-dnd";
import { sort } from "../redux/slices/boardsSlice";

const App = () => {
  const dispatch = useTypedDispatch();
  const [activeBoard, setActiveBoard] = useState(0);
  const boards = useTypedSelector(state => state.boards.boardArray);

  // TODO type

  const onDragEnd = (result: any) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    dispatch(
      sort({
        boardIndex: activeBoard,
        droppableIdStart: source.droppableId,
        droppableIdEnd: destination.droppableId,
        droppableIndexStart: source.index,
        droppableIndexEnd: destination.index,
        draggableId,
      })
    );
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
