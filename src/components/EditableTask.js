import React, { useState } from "react";
const EditableTask = ({ handleCancel, editTask, handleEditTask, isEmpty }) => {
  return (
    <li className="list-group-item d-flex align-items-center justify-content-between p-2 border">
      <div className="container px-3">
        <div className="row align-items-center">
          <div className="col-xs-12 col-md-6 my-1">
            <div className="row align-items-center justify-content-start  ">
              <div className="col-1">
                <input
                  type="checkbox"
                  className="form-check-input"
                  checked={false}
                ></input>
              </div>
              <div className="col">
                <input
                  type="text"
                  name="title"
                  className="form-control "
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
            </div>
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="row justify-content-end me-4 ">
              <div className="col-1 mx-3">
                <button type="submit" className="btn btn-sm btn-success">
                  save
                </button>
              </div>
              <div className="col-1 ">
                <button
                  className="btn btn-sm btn-light border-black"
                  onClick={handleCancel}
                >
                  cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
export default EditableTask;
