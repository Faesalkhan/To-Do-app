import React, { useEffect, useState } from "react";
import AddToDoForm from "./components/AddToDoForm";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import { nanoid } from "@reduxjs/toolkit";
import TotalCheckedItems from "./components/TotalCheckedItems";
const App = () => {
  const [darkmode, setDarkmode] = useState(false);
  const [complete, setComplete] = useState(false);
  const [todotask, setTodotask] = useState([]);

  useEffect(() => {
    const storedTodos = localStorage.getItem("todotask");
    if (storedTodos) {
      setTodotask(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todotask", JSON.stringify(todotask));
  }, [todotask]);

  const [inputValue, setInputValue] = useState("");
  const addTask = (title) => {
    const id = nanoid();
    const newTask = {
      id: id,
      title: title,
      completed: complete,
    };
    const newTasks = [...todotask, newTask];
    setTodotask(newTasks);
  };
  const updateComplete = (xid) => {
    const updated = todotask.map((todo) =>
      todo.id === xid ? { ...todo, completed: !todo.completed } : todo
    );
    setTodotask(updated);
  };
  const delelteTask = (yid) => {
    const fil = todotask.filter((todo) => todo.id !== yid);
    setTodotask(fil);
  };
  const handleClearData = () => {
    localStorage.clear();
    setTodotask([]);
  };

  const checkedItems = todotask.filter((x) => x.completed === true).length;

  return (
    <div className={`${darkmode && "dark-mode"}`}>
      <div className="container appContainer">
        <Header darkmode={darkmode} setDarkmode={setDarkmode} />
        <AddToDoForm handleAddTask={addTask} />
        <ToDoList
          todotask={todotask}
          handleCheck={updateComplete}
          handleDel={delelteTask}
          setTodotask={setTodotask}
        />
        <TotalCheckedItems
          checkedItems={checkedItems}
          handleClearData={handleClearData}
        />
      </div>
    </div>
  );
};
export default App;
