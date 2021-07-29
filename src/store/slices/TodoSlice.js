/* eslint-disable function-paren-newline */
/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import db from '../../database/index';

export const fetchTodos = createAsyncThunk('todos/fetchTodos', () =>
  db.fetchTodos(),
);

export const addTodo = createAsyncThunk('todos/addTodo', ({ content }) =>
  db.addTodo(content),
);

export const removeTodo = createAsyncThunk('todos/removeTodo', (id) =>
  db.removeTodo(id),
);

export const editTodo = createAsyncThunk('todos/editTodo', ({ id, ...data }) =>
  db.updateTodo({ id, ...data }),
);

const mapTodos = (todoList) =>
  todoList.map((todo) => ({
    ...todo,
    finished: !!todo.finished,
  }));

const updateTodos = (state, { payload }) => {
  state.todos = mapTodos(payload);
};

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todos: [],
  },
  reducers: {},

  extraReducers: {
    [fetchTodos.fulfilled]: updateTodos,
    [addTodo.fulfilled]: updateTodos,
    [removeTodo.fulfilled]: updateTodos,
    [editTodo.fulfilled]: updateTodos,
  },
});

export const TodoSelectors = {
  todos: (state) => state.todos,
  length: (state) => state.todos.length,
};

export const TodoActions = {
  ...todoSlice.actions,
  addTodo,
  fetchTodos,
  removeTodo,
  editTodo,
};

export default todoSlice;
