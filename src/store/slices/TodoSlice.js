/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import db from '../../database';

function findTodoById(state, id) {
  return state.todos.find((elem) => elem.id === id);
}

export const fetchTodos = createAsyncThunk(
  'todos/fetchTodos',
  async () => db.getState,
);

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo: (state, action) => {
      db.addTodo(action.payload);
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

  extraReducers: {
    [fetchTodos.pending]: (state, action) => {
      console.log('pending users');
    },
    [fetchTodos.fulfilled]: (state, { payload }) => {
      state.todos = payload.map((todo) => ({
        ...todo,
        finished: !!todo.finished,
      }));
    },
  },
});

export const TodoSelectors = {
  todos: (state) => state.todos,
  length: (state) => state.todos.length,
};

export const TodoActions = { ...todoSlice.actions };

export default todoSlice;
