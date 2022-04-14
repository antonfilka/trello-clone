import { appContainer } from "./App.css";
import ListsContainer from "./ListsContainer/ListsContainer";

const App = () => {
  return (
    <div className={appContainer}>
      <ListsContainer />
    </div>
  );
};

export default App;
