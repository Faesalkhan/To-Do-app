import React from "react";
import { useDispatch } from "react-redux";
import { toggleComplete, deleteTodo } from "./utils/todoSlice";

const ToDoItem = ({ item }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(
      deleteTodo({
        id: item.id,
      })
    );
  };
  const handleCompleteClick = () => {
    dispatch(
      toggleComplete({
        id: item.id,
        completed: !item.completed,
      })
    );
  };
  return (
    <li
      className={`list-group-item ${
        item.completed && "list-group-item-success "
      }`}
    >
      <div className="d-flex justify-content-between ">
        <span className="d-flex align-items-center  ">
          <input
            type="checkbox"
            checked={item.completed}
            className="form-check me-4 "
            onChange={handleCompleteClick}
          ></input>
          <label>{item?.title}</label>
        </span>
        <button className="btn btn-danger " onClick={handleDelete}>
          Delete
        </button>
      </div>
    </li>
  );
};
export default ToDoItem;
