import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    removeTodo: (state, action) => {
      const todos = state.todos;
      const index = todos.map((todo) => todo.id).indexOf(action.payload);
      if (index >= 0) {
        todos.splice(index, 1);
      }
    },
  },
});
export default todoSlice;
export const { addTodo, removeTodo } = todoSlice.actions;
