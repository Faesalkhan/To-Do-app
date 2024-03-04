import { Provider } from "react-redux";
import AddToDoForm from "./components/AddToDoForm";
import todoStore from "./components/utils/todoStore";
import ToDoList from "./components/ToDoList";
import TotalCheckedItems from "./components/TotalCheckedItems";

const App = () => {
  return (
    <Provider store={todoStore}>
      <div className="container py-3">
        <AddToDoForm />
        <ToDoList />
        <TotalCheckedItems />
      </div>
    </Provider>
  );
};
export default App;
