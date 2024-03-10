import React from "react";
const ToDoItem = ({ task, handleCheck, handleDel, handleEditTodo }) => {
  const handleCh = () => {
    handleCheck(task.id);
  };
  const handleDelete = () => {
    handleDel(task.id);
  };
  const handleEdit = (e) => {
    handleEditTodo(e, task);
  };
  return (
    <li
      className={`${
        task.completed && "list-group-item-success "
      } list-group-item d-flex justify-content-between border align-items-center  p-2`}
    >
      <div className="d-flex">
        <input
          type="checkbox"
          className="form-check-input"
          checked={task.completed}
          onChange={handleCh}
        ></input>
        <label className="form-check-label ms-4">{task.title}</label>
      </div>

      <button
        className="btn btn-sm btn-primary ms-auto me-1"
        onClick={handleEdit}
      >
        edit
      </button>
      <button className="btn btn-sm btn-danger " onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};
export default ToDoItem;
