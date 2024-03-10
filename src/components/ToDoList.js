import { Fragment, useState } from "react";
import ToDoItem from "./ToDoItem";
import EditableTask from "./EditableTask";

const ToDoList = ({ todotask, handleCheck, handleDel, setTodotask }) => {
  const [editId, setEditId] = useState(null);
  const [isEmpty, setIsempty] = useState(false);
  const handleCancel = () => {
    setEditId(null);
  };
  const [editTask, setEditTask] = useState({
    title: "",
  });
  const handleEditTask = (e) => {
    e.preventDefault();
    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;
    const newEditTask = { ...editTask };
    newEditTask[fieldName] = fieldValue;
    setEditTask(newEditTask);
  };
  const handleEditSave = (e) => {
    e.preventDefault();
    const editedTask = {
      id: editId,
      title: editTask.title,
    };
    const newTask = [...todotask];
    const index = todotask.findIndex((todo) => todo.id === editId);
    newTask[index] = editedTask;
    if (editedTask.title.trim().length !== 0) {
      setTodotask(newTask);
      setEditId(null);
      setIsempty(false);
    } else {
      setIsempty(true);
    }
  };
  const handleEditTodo = (e, xtask) => {
    e.preventDefault();
    setEditId(xtask.id);
    const todoVals = {
      title: xtask.title,
    };
    setEditTask(todoVals);
  };
  return (
    <div className="container ">
      <div className="row">
        <div className="col-12">
          <form onSubmit={handleEditSave}>
            <ul className="list-group">
              {todotask.map((task) => (
                <Fragment>
                  {task.id === editId ? (
                    <EditableTask
                      handleCancel={handleCancel}
                      editTask={editTask}
                      handleEditTask={handleEditTask}
                      isEmpty={isEmpty}
                    />
                  ) : (
                    <ToDoItem
                      key={task.id}
                      task={task}
                      handleCheck={handleCheck}
                      handleDel={handleDel}
                      handleEditTodo={handleEditTodo}
                    />
                  )}
                </Fragment>
              ))}
            </ul>
          </form>
        </div>
      </div>
    </div>
  );
};
export default ToDoList;
