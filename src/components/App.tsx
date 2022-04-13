import { useTypedSelector } from "../hooks/reduxHooks";
import TrelloList from "./TrelloList/TrelloList";
import { container } from "./App.css";

const App = () => {
  const lists = useTypedSelector(state => state.boards.boardArray[0].listArray);
  return (
    <div className={container}>
      {lists.map(list => (
        <TrelloList
          key={list.listId}
          title={list.listName}
          tasks={list.taskArray}
        />
      ))}
    </div>
  );
};

export default App;
