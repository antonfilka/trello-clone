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
  const [activeBoardId, setActiveBoardId] = useState("board-0");
  const [loggerOpen, setLoggerOpen] = useState(true);
  const modalActive = useTypedSelector(state => state.boards.modalActive);
  const boards = useTypedSelector(state => state.boards.boardArray);

  const getActiveBoard = boards.filter(
    board => board.boardId === activeBoardId
  )[0];

  const lists = getActiveBoard.lists;

  const onDragEnd = (result: any) => {
    const { destination, source, draggableId } = result;

    const sourceList = lists.filter(
      list => list.listId === source.droppableId
    )[0];

    if (!destination) {
      return;
    }

    dispatch(
      sort({
        boardIndex: boards.findIndex(board => board.boardId === activeBoardId),
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
          sourceList.tasks.filter(task => task.taskId === draggableId)[0]
            .taskName
        }" from list "${sourceList.listName}" to list "${
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
      dispatch(deleteBoard({ boardId: getActiveBoard.boardId }));

      dispatch(
        addLog({
          logId: v4(),
          logMessage: `Delete board: ${getActiveBoard.boardName}`,
          logAuthor: "User",
          logTimestamp: String(Date.now()),
        })
      );

      const newIndexToSet = () => {
        const indexToBeDeleted = boards.findIndex(
          board => board.boardId === activeBoardId
        );
        return indexToBeDeleted === 0
          ? indexToBeDeleted + 1
          : indexToBeDeleted - 1;
      };

      setActiveBoardId(boards[newIndexToSet()].boardId);
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
      <BoardList
        setActiveBoardId={setActiveBoardId}
        activeBoardId={activeBoardId}
      />
      <div className={board}>
        <DragDropContext onDragEnd={onDragEnd}>
          <ListsContainer lists={lists} boardId={getActiveBoard.boardId} />
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
