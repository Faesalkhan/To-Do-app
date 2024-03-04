import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./utils/todoSlice";

const AddToDoForm = () => {
  const [todoValue, setTodoValue] = useState("");
  const dispatch = useDispatch();
  const submitForm = (e) => {
    e.preventDefault();
    todoValue.length !== 0
      ? dispatch(
          addTodo({
            title: todoValue,
          })
        )
      : alert("enter a to do task");
    setTodoValue("");
  };
  return (
    <form onSubmit={submitForm}>
      <input
        className="form-control my-3"
        placeholder="Add to do..."
        value={todoValue}
        onChange={(e) => setTodoValue(e.target.value)}
      ></input>
      <button className="btn btn-primary ">Submit</button>
    </form>
  );
};
export default AddToDoForm;
