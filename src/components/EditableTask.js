import React, { useState } from "react";
const EditableTask = ({ handleCancel, editTask, handleEditTask, isEmpty }) => {
  return (
    <li className="list-group-item d-flex align-items-center justify-content-between p-2 border">
      <div className="d-flex">
        <input type="checkbox" className="form-check" checked={false}></input>
        <input
          type="text"
          name="title"
          className="form-control ms-4"
          value={editTask.title}
          onChange={handleEditTask}
        ></input>
        {isEmpty && (
          <span
            className="spantext"
            style={{ color: "red", fontStyle: "italic" }}
          >
            Please enter some text.
          </span>
        )}
      </div>
      <button type="submit" className="btn btn-sm btn-success ms-auto  me-1">
        save
      </button>
      <button
        className="btn btn-sm btn-light border-black"
        onClick={handleCancel}
      >
        cancel
      </button>
    </li>
  );
};
export default EditableTask;
