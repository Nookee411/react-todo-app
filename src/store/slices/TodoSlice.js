/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

function findTodoById(state, id) {
  return state.todos.find((elem) => elem.id === id);
}

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
      const { id, content, finished } = action.payload;
      state.todos.unshift({ id, content, finished });
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
