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
      <div className="container px-3">
        <div className="row align-items-center">
          <div className="col-xs-12 col-md-6 my-1">
            <div className="row align-items-center justify-content-start  ">
              <div className="col-1">
                <input
                  type="checkbox"
                  className="form-check-input"
                  checked={task.completed}
                  onChange={handleCh}
                ></input>
              </div>
              <div className="col">
                <label className="form-check-label">{task.title}</label>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="row justify-content-end me-4 ">
              <div className="col-1 mx-3">
                <button className="btn btn-sm btn-primary" onClick={handleEdit}>
                  edit
                </button>
              </div>
              <div className="col-1 ">
                <button
                  className="btn btn-sm btn-danger "
                  onClick={handleDelete}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
export default ToDoItem;
