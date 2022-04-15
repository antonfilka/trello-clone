import { useState } from "react";
import { useTypedDispatch, useTypedSelector } from "../hooks/reduxHooks";
import {
  appContainer,
  board,
  buttons,
  deleteBoardButton,
  loggerButton,
} from "./App.css";
import BoardList from "./BoardList/BoardList";
import ListsContainer from "./ListsContainer/ListsContainer";
import { DragDropContext } from "react-beautiful-dnd";
import { deleteBoard, sort } from "../redux/slices/boardsSlice";
import ModalEdit from "./ModalEdit/ModalEdit";
import { addLog } from "../redux/slices/loggerSlice";
import { v4 } from "uuid";
import LogggerModal from "./LogggerModal/LogggerModal";

const App = () => {
  const dispatch = useTypedDispatch();
  const [activeBoard, setActiveBoard] = useState(0);
  const [loggerOpen, setLoggerOpen] = useState(true);
  const modalActive = useTypedSelector(state => state.boards.modalActive);
  const boards = useTypedSelector(state => state.boards.boardArray);
  const lists = boards[activeBoard]?.listArray;

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
    dispatch(
      addLog({
        logId: v4(),
        logMessage: `Move "${
          lists
            .filter(list => list.listId === source.droppableId)[0]
            .taskArray.filter(task => task.taskId === draggableId)[0].taskName
        }" from list "${
          lists.filter(list => list.listId === source.droppableId)[0].listName
        }" to list "${
          lists.filter(list => list.listId === destination.droppableId)[0]
            .listName
        }"`,
        logAuthor: "User",
        logTimestamp: String(Date.now()),
      })
    );
  };

  const handleDeleteBoard = () => {
    if (boards.length > 1) {
      dispatch(deleteBoard({ boardId: boards[activeBoard].boardId }));
      dispatch(
        addLog({
          logId: v4(),
          logMessage: `Delete board: ${boards[activeBoard].boardName}`,
          logAuthor: "User",
          logTimestamp: String(Date.now()),
        })
      );
      setActiveBoard(boards.length - 2);
    } else {
      alert("Minimum board amount is 1");
    }
  };

  const handleOpenLogger = () => {
    setLoggerOpen(!loggerOpen);
  };

  return (
    <div className={appContainer}>
      {modalActive ? <ModalEdit /> : null}
      <BoardList setActiveBoard={setActiveBoard} activeBoard={activeBoard} />
      <div className={board}>
        <DragDropContext onDragEnd={onDragEnd}>
          <ListsContainer lists={lists} boardId={boards[activeBoard].boardId} />
        </DragDropContext>

        {loggerOpen ? <LogggerModal /> : null}
      </div>
      <div className={buttons}>
        <button className={deleteBoardButton} onClick={handleDeleteBoard}>
          Delete this board
        </button>
        <button className={loggerButton} onClick={handleOpenLogger}>
          {loggerOpen ? "Hide activity history" : "Show activity history"}
        </button>
      </div>
    </div>
  );
};

export default App;
