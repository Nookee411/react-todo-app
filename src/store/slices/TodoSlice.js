/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

function findTodoById(state, id) {
  return state.todos.find((elem) => elem.id === id);
}
let todoID = 0;
const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todos: [
      { id: (todoID += 1), content: 'Buy milk', finished: false },
      { id: (todoID += 1), content: 'Buy bread', finished: false },
      { id: (todoID += 1), content: 'Buy butter', finished: true },
      { id: (todoID += 1), content: 'Buy silk', finished: false },
    ],
  },
  reducers: {
    addTodo: (state, action) => {
      const { content, finished } = action.payload;
      state.todos.unshift({ id: (todoID += 1), content, finished });
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((elem) => elem.id !== action.payload);
    },

    editTodo: (state, { payload: { id, content, finished } }) => {
      const editingTodo = findTodoById(state, id);
      if (finished !== undefined) editingTodo.finished = finished;
      if (content !== undefined) editingTodo.content = content;
    },
  },
});

export const TodoSelectors = {
  todos: (state) => state.todos,
  length: (state) => state.todos.length,
};

export const TodoActions = { ...todoSlice.actions };

export default todoSlice;
