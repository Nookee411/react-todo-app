import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todos: [
      { id: 0, content: 'Buy milk', finished: false },
      { id: 1, content: 'Buy bread', finished: false },
      { id: 2, content: 'Buy butter', finished: true },
      { id: 3, content: 'Buy silk', finished: false },
    ],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    removeTodo: (state, action) => {
      const { todos } = state;
      const index = todos.map((todo) => todo.id).indexOf(action.payload);
      if (index >= 0) {
        todos.splice(index, 1);
      }
    },
    // pass id of todo as payloadAssignment to property of function parameter 'todo'
    checkTodo: (state, action) => {
      const { todos } = state;
      const todo = todos.find((elem) => elem.id === action.payload);
      todo.finished = !todo.finished;
    },
  },
});
export default todoSlice;
export const { addTodo, removeTodo, checkTodo } = todoSlice.actions;
