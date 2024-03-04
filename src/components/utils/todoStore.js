import { configureStore } from "@reduxjs/toolkit";
import todoReduc from "./todoSlice";

export default configureStore({
  reducer: {
    todos: todoReduc,
  },
});
