/* eslint-disable function-paren-newline */
/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import db from '../../database/index';

export const fetchTodos = createAsyncThunk(
  'todos/fetchTodos',
  (action, thunkAPI) => db.fetchTodos(thunkAPI.getState().user.id),
);

export const addTodo = createAsyncThunk(
  'todos/addTodo',
  ({ content }, trunkAPI) => db.addTodo(content, trunkAPI.getState().user.id),
);

export const removeTodo = createAsyncThunk('todos/removeTodo', (id, thunkAPI) =>
  db.removeTodo(id, thunkAPI.getState().user.id),
);

export const editTodo = createAsyncThunk(
  'todos/editTodo',
  ({ id, ...data }, thunkAPI) =>
    db.updateTodo({ id, ...data }, thunkAPI.getState().user.id),
);

const mapTodos = (todoList) =>
  todoList.map((todo) => ({
    ...todo,
    finished: !!todo.finished,
  }));

const updateTodos = (state, { payload }) => {
  state.items = mapTodos(payload);
};

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    items: [],
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
  todos: (state) => state.todos.items,
  length: (state) => state.todos.items.length,
};

export const TodoActions = {
  ...todoSlice.actions,
  addTodo,
  fetchTodos,
  removeTodo,
  editTodo,
};

export default todoSlice;
