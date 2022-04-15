import { useState } from "react";
import { useTypedDispatch, useTypedSelector } from "../hooks/reduxHooks";
import { appContainer, deleteBoardButton } from "./App.css";
import BoardList from "./BoardList/BoardList";
import ListsContainer from "./ListsContainer/ListsContainer";
import { DragDropContext } from "react-beautiful-dnd";
import { deleteBoard, sort } from "../redux/slices/boardsSlice";
import ModalEdit from "./ModalEdit/ModalEdit";

const App = () => {
  const dispatch = useTypedDispatch();
  const [activeBoard, setActiveBoard] = useState(0);
  const modalActive = useTypedSelector(state => state.boards.modalActive);
  const boards = useTypedSelector(state => state.boards.boardArray);
  const lists = boards[activeBoard].listArray;

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

  const handleDeleteBoard = () => {
    boards.length > 1
      ? dispatch(deleteBoard({ boardId: boards[activeBoard].boardId }))
      : alert("Minimum board amount is 1");
  };

  return (
    <div className={appContainer}>
      {modalActive ? <ModalEdit /> : null}
      <BoardList setActiveBoard={setActiveBoard} activeBoard={activeBoard} />
      {boards ? (
        <>
          <DragDropContext onDragEnd={onDragEnd}>
            <ListsContainer
              lists={lists}
              boardId={boards[activeBoard].boardId}
            />
          </DragDropContext>
          <button className={deleteBoardButton} onClick={handleDeleteBoard}>
            Delete this board
          </button>
        </>
      ) : (
        <div>No boards, create a new one</div>
      )}
    </div>
  );
};

export default App;
