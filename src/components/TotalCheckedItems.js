import React from "react";
import { useSelector } from "react-redux";

const TotalCheckedItems = () => {
  const totalCompleted = useSelector((state) =>
    state.todos.filter((todo) => todo.completed === true)
  );
  return <h4>Total tasks completed : {totalCompleted.length}</h4>;
};
export default TotalCheckedItems;
