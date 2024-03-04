import React from "react";
import ToDoItem from "./ToDoItem";
import { useSelector } from "react-redux";

const ToDoList = () => {
  const todos = useSelector((state) => state.todos);
  return (
    <ul className="list-group my-3 ">
      {todos.map((todo) => (
        <ToDoItem key={todo.id} item={todo} />
      ))}
    </ul>
  );
};
export default ToDoList;
