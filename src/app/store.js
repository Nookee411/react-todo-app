import { configureStore } from "@reduxjs/toolkit";
import TodoSlice from "../features/todo/TodoSlice";

export const store = configureStore({
  reducer: TodoSlice.reducer,
});
