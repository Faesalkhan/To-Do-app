import React, { useState } from "react";
const AddToDoForm = ({ handleAddTask }) => {
  const [todoValue, setTodoValue] = useState("");
  const [warningVisible, setWarningVisible] = useState(false);
  const handleAdd = () => {
    if (todoValue.trim().length !== 0) {
      setWarningVisible(false);
      handleAddTask(todoValue);
      setTodoValue("");
    } else {
      setWarningVisible(true);
    }
  };
  return (
    <div className="container my-2">
      <div className="row">
        <div className="col-12">
          <input
            type="text"
            className="form-control"
            placeholder="create to do task..."
            value={todoValue}
            onChange={(e) => setTodoValue(e.target.value)}
          ></input>
          {warningVisible && (
            <span style={{ color: "red", fontStyle: "italic" }}>
              Please enter some text.
            </span>
          )}
        </div>
        <div className="col-2">
          <button className="btn btn-sm btn-primary my-2" onClick={handleAdd}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
};
export default AddToDoForm;
